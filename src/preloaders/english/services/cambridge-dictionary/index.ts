import { trim, uniq, set } from 'lodash';
import * as AR from 'fp-ts/Array';
import { pipe } from 'fp-ts/pipeable';
import * as TE from 'fp-ts/TaskEither';
import * as O from 'fp-ts/Option';

import { withCache } from '../../../../utils/cache';
import $ from '../../../../utils/dom';
import { loadPageDom } from '../../../../utils/http';
import { genId } from '../../../../utils/crypto';
import { getCacheDir } from '../../../../utils/paths';
import {
  ICambridgeWord,
  IWordDomain,
  IPartOfSpeech,
  IMeaning,
  IPhrase,
  IDefinition,
  IExample,
  WordDialect,
  defaultWordState
} from './models';

import TaskEither = TE.TaskEither;
import Option = O.Option;

const CAMBRIDGE_HOST = 'https://dictionary.cambridge.org';
const UNKNOWN = 'unknown';
const DIALECTS = [WordDialect.Uk, WordDialect.Us];

export const fetchWord = withCache({
  dir: getCacheDir('cambridge-dict'),
  cacheKey: word => word,
})(_fetchWord);

function _fetchWord(word: string): TaskEither<Error, ICambridgeWord> {
  return pipe(
    TE.bindTo('document')(loadPageDom(`${CAMBRIDGE_HOST}/dictionary/english/${word}`)),
    TE.chain(({ document }) =>
      pipe(
        TE.tryCatch(
          async () => scrapeData('domains', document.body),
          (err) => new Error(`Error while scraping word '${word}'! ${err}`),
        ),
        TE.chain(TE.fromOption(() => new Error(`Word '${word}' not found!`))),
        TE.map((data) => ({
          ...data,
          main: {
            word,
            pronunciations:
              mapArrayToRecord(
                findPronAudio(document.body)
              )(DIALECTS),
            transcriptions:
              mapArrayToRecord(
                findTranscription(document.body)
              )(DIALECTS),
          },
        })),
      ),
    ),
    TE.orElse((err) => TE.left(new Error(String(err)))),
  );
}

type Layers = typeof layers;
type ParentsType = Partial<Record<keyof Layers, string>>; // layer -> id

const layers = {
  domains: {
    splitElements: $.findAll('#page-content > .page .pr.dictionary'),
    createEntity: createDomain,
    nextLayers: ['partsOfSpeech'],
  },
  partsOfSpeech: {
    splitElements: $.findAll('.pr.entry-body__el'),
    createEntity: createPartOfSpeech,
    nextLayers: ['meanings'],
  },
  meanings: {
    splitElements: $.findAll('.pr.dsense'),
    createEntity: createMeaning,
    nextLayers: ['phrases', 'definitions'],
  },
  phrases: {
    splitElements: $.findAll('.dphrase-block'),
    createEntity: createPhrase,
    nextLayers: ['definitions'],
  },
  definitions: {
    splitElements: $.findAll('.ddef_block'),
    createEntity: createDefinition,
    nextLayers: ['examples'],
  },
  examples: {
    splitElements: $.findAll('.examp.dexamp'),
    createEntity: createExample,
    nextLayers: [],
  },
};

const checkIfNotEmpty = O.fromPredicate(<A>(a: Array<A>) => !!a.length);

const scrapeData = (
  layer: keyof Layers,
  root: Element,
  parents: ParentsType = {}, // layer -> id
  state: ICambridgeWord = defaultWordState(),
): Option<ICambridgeWord> =>
  pipe(
    O.bindTo('layerData')(O.of(layers[layer])),
    O.bind('elements', ({ layerData }) => O.of(layerData.splitElements(root))),
    O.chainFirst(({ elements }) => checkIfNotEmpty(elements)),
    O.bind('result', ({ elements, layerData }) => O.of(
      AR.reduce(O.of(state), (acc, element: Element) =>
        pipe(
          O.bindTo('entity')(O.chain((_acc: ICambridgeWord) => O.of(layerData.createEntity(element, parents, _acc)))(acc)),
          O.chainFirst(({ entity }) => O.of(set(state, `${layer}.${entity.id}`, entity))),
          O.chain(({ entity }) =>
            AR.reduce(acc, (_acc, next: keyof Layers) =>
              O.chain((__acc: ICambridgeWord) => scrapeData(next, element, { ...parents, [layer]: entity.id }, __acc))(acc),
            )(layerData.nextLayers as Array<keyof Layers>),
          ),
        ),
      )(elements))),
    O.map(({ result }) => result),
    O.getOrElse(() => Object.keys(parents).length ? O.of(state) : O.none),
  );

function createDomain(item: Element, parents: ParentsType): IWordDomain {
  const title = O.toNullable($.text('.di-head')(item)) || 'common';
  const includes = (target: string) => new RegExp(target, 'i').test(title);

  const type = (() => {
    switch(true) {
      case includes('American'): return 'american';
      case includes('Business'): return 'business';
      default: return 'common';
    }
  })()

  return {
    id: genId(type),
    value: type,
  };
}

function createPartOfSpeech(item: Element, parents: ParentsType, state: ICambridgeWord): IPartOfSpeech {
  const name = O.toNullable($.text('.pos.dpos')(item)) || UNKNOWN;
  const id = genId(name);

  return {
    id,
    value: name,
    ...composeParents(state.partsOfSpeech[id], parents),
  };
}

function createMeaning(item: Element, parents: ParentsType, state: ICambridgeWord): IMeaning {
  let name = (O.toNullable($.text('.dsense_h > .guideword.dsense_gw')(item)) || UNKNOWN).toLowerCase();
  name = trim(name, '()')
  const id = genId(name);

  return {
    id,
    value: name,
    ...composeParents(state.meanings[id], parents),
  };
}

function createPhrase(item: Element, parents: ParentsType, state: ICambridgeWord): IPhrase {
  const name = O.toNullable($.text('.dphrase-title')(item)) || UNKNOWN;
  const id = genId(name);

  return {
    id,
    value: name,
    ...composeParents(state.phrases[id], parents),
  };
}

function createDefinition(item: Element, parents: ParentsType, state: ICambridgeWord): IDefinition {
  const name = trim(O.toNullable($.text('.def.ddef_d.db')(item)) || UNKNOWN, ': ');
  const langLevel = trim(O.toNullable($.text('.ddef-info .dxref')(item)) || '', ' ') || null;
  const tag = trim(O.toNullable($.text('.ddef-info .dlab .dusage')(item)) || '', ' ') || null;
  const id = genId(name);

  const prev = state.definitions[id] || {};

  return {
    id,
    value: name,
    langLevel: prev.langLevel || langLevel,
    tag: prev.tag || tag,
    phraseIds: prev.phraseIds || [],
    ...composeParents(prev, parents),
  };
}

function createExample(item: Element, parents: ParentsType, state: ICambridgeWord): IExample {
  const name = item?.textContent ?? UNKNOWN;
  const id = genId(name);

  return {
    id,
    value: name,
    ...composeParents(state.examples[id], parents),
  };
}

function composeParents(prev: any, parents: ParentsType): any {
  const getField = (key: keyof ParentsType) => {
    switch (key) {
      case 'domains': return 'domainIds';
      case 'partsOfSpeech': return 'partOfSpeechIds';
      case 'meanings': return 'meaningIds';
      case 'phrases': return 'phraseIds';
      case 'definitions': return 'definitionIds';
      case 'examples': return 'exampleIds';
    }
  }

  // @ts-ignore
  return Object.keys(parents).reduce((acc, key: keyof ParentsType) => {
    const field = getField(key);
    return {
      ...acc,
      [field]: uniq((acc[field] || []).concat(parents[key])),
    };
  }, prev || {});
}

const findPronAudio = (element: Element) => (lng: WordDialect) =>
  pipe(
    $.find<HTMLAudioElement>(`.pos-header .${lng} amp-audio source[type='audio/mpeg']`)(element),
    O.map((a) => `${CAMBRIDGE_HOST}${a.src}`),
    O.toNullable,
  );

const findTranscription = (element: Element) => (lng: WordDialect) =>
  pipe(
    $.text(`.pos-header .${lng} .dpron .dipa`)(element),
    O.toNullable,
  );

const mapArrayToRecord = <A extends string, B>(ab: (a: A) => B) => (a: Array<A>): Record<A, B> => {
  return pipe(
    AR.map<A, [A, B]>((i: A) => [i, ab(i)])(a),
    AR.reduce({} as Record<A, B>, (acc, i) => ({ ...acc, [i[0]]: i[1] })),
  );
};

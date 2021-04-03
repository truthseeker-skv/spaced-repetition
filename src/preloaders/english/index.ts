import { pipe } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';

import { IForeignWord } from './models';
import { fetchWord } from './services/cambridge-dictionary';
import { ICambridgeWord, EVerbForms } from './services/cambridge-dictionary/models';
import { fetchFrequency } from './services/datamuse';
import { fetchVideoContext } from './services/puzzle-english/video-context';

export const preloadEngWord = (word: string) =>
  _preloader(() => fetchWord(word))();

export type IrregularForms = [string, string, string];

export const preloadEngIrregularVerb = (forms: IrregularForms) => {
  const [first, second, third] = forms;

  const mapIrregular = () =>
    pipe(
      TE.bindTo('dict')(fetchWord(first)),
      TE.bind('second', ({ dict }) => fetchWord(second)),
      TE.bind('third', ({ dict }) => fetchWord(third)),
      TE.map(({ dict, second, third }) => ({
        ...dict,
        verbForms: {
          [EVerbForms.First]: dict.main,
          [EVerbForms.Second]: second.main,
          [EVerbForms.Third]: third.main,
        },
      })),
    );

  return _preloader(mapIrregular)();
};

const _preloader = (fn: () => TE.TaskEither<Error, ICambridgeWord>): TE.TaskEither<Error, IForeignWord> => {
  return pipe(
    TE.bindTo('dict')(fn()),
    TE.bind('video', ({ dict }) => fetchVideoContext(dict.main.word, '')),
    TE.bind('frequency', ({ dict }) => fetchFrequency(dict.main.word)),
    TE.chain(({ dict, video, frequency }) => TE.of<Error, IForeignWord>({
      dict: dict,
      videoContext: video,
      frequency,
      thumbnailSrc: '',
    })),
  );
}

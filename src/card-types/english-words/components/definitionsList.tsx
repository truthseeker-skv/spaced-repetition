import React from 'react';

import { selectWord } from '../../../preloaders/english/services/selectors';
import { WordDefinitions } from './WordDefinitions';

export function renderWordDefinitions(
  word: ReturnType<typeof selectWord>,
  options?: {
    shouldHideWordKeys?: boolean;
    shouldLimitResults?: boolean;
    shouldShowExamples?: boolean;
  }
): JSX.Element {
  const definitions = word.definitions.map(word.selectDefinition);

  return (
    <WordDefinitions
      word={word.wordOrForms}
      items={definitions.map(d => ({
        definition: d.value,
        langLevel: d.langLevel,
        tag: d.tag,
        examples: d.examples.map(e => e.value),
        meaning: d.meanings.map(m => m.value).join(' / '),
        partOfSpeech: d.partsOfSpeech.map(p => p.value).join(' / '),
        meaningOrder: 0, // TODO: remove if not used
        definitionOrder: 0, // TODO: remove if not used
      }))}
      isVerbsOnly={!!word.verbFormsArray.length}
      shouldHideWordKeys={options?.shouldHideWordKeys ?? false}
      shouldLimitResults={options?.shouldLimitResults ?? false}
      shouldShowExamples={options?.shouldShowExamples ?? false}
    />
  );
}


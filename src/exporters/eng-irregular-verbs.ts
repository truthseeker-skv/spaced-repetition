import * as AR from 'fp-ts/Array';

import { exportEngPreloadedWords } from '../card-types/english-words/exporter';
import { IrregularForms, preloadEngIrregularVerb } from '../preloaders/english';
import { getIrregularVerbs } from '../sources/english/irregular-verbs';
import { runQueue } from '../utils/queue';

export const exportEngIrregularVerbs = async () => {
  const words: Array<IrregularForms> = getIrregularVerbs();

  let cards = await runQueue({
    taskName: '-> Preloading words data',
    items: words,
    handleItem: preloadEngIrregularVerb,
  });

  await exportEngPreloadedWords('English::Irregular verbs', AR.rights(cards));
};

(async () => {
  // await exportIrregularEngVerbs();
})();

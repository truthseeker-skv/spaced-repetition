import * as AR from 'fp-ts/Array';

import { exportEngPreloadedWords } from '../card-types/english-words/exporter';
import { preloadEngWord } from '../preloaders/english';
import { runQueue } from '../utils/queue';

export const exportEngWords = async (deck: string, words: Array<string>) => {
  let cards = await runQueue({
    taskName: '-> Preloading words data',
    items: words,
    handleItem: preloadEngWord,
  });

  await exportEngPreloadedWords(deck, AR.rights(cards));
};

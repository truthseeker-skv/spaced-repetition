import { pipe } from 'fp-ts/pipeable';
import * as AR from 'fp-ts/Array';
import * as T from 'fp-ts/Task';
import * as TE from 'fp-ts/TaskEither';

import { exportEngPreloadedWords } from '../card-types/english-words/exporter';
import { preloadEngWord } from '../preloaders/english';
import { getWordsFromFilePart } from '../sources/english/frequent-words';
import { runQueue } from '../utils/queue';

export const exportEngFrequentWords = async (part: number) => {
  const words = await pipe(
    getWordsFromFilePart(part),
    TE.getOrElse<Error, Array<string>>(() => T.of([])),
  )();

  let cards = await runQueue({
    taskName: '-> Preloading words data',
    items: words,
    handleItem: preloadEngWord,
  });

  await exportEngPreloadedWords(`English::Frequent words-${part}`, AR.rights(cards));
};

(async () => {
  // for await (let part of range(2, 11)) {
  //   await exportFrequentEngWords(part);
  // }
})();

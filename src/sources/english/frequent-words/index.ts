import { pipe } from 'fp-ts/pipeable';
import * as TE from 'fp-ts/TaskEither';
import * as AR from 'fp-ts/Array';
import path from 'path';

import { readJsonFile } from '../../../utils/fs';

const STORAGE_PATH = path.resolve(__dirname, './storage');

export function getWordsFromFilePart(part: number): TE.TaskEither<Error, Array<string>> {
  return pipe(
    readJsonFile<Array<{ word: string }>>(path.join(STORAGE_PATH, `part-${part}.json`)),
    TE.map(AR.map((l) => l.word)),
    TE.alt(
      () => TE.right<Error, Array<string>>([])
    ),
  );
}

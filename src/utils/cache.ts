import { pipe } from 'fp-ts/pipeable';
import * as TE from 'fp-ts/TaskEither';

import { jsonPath, readJsonFile, writeJsonFile } from './fs';

import TaskEither = TE.TaskEither;

export interface ICacheConfig {
  dir: string;
  cacheKey: (...args: Array<any>) => string; // key for data to store
}

export const withCache = ({ dir, cacheKey }: ICacheConfig) =>
  <T>(task: (...args: Array<any>) => TaskEither<Error, T>) =>
    (...args: Array<any>): TaskEither<Error, T> =>
      pipe(
        TE.rightIO(jsonPath(dir)(cacheKey(...args))),
        TE.chain(fPath => readJsonFile<T>(fPath)),
        TE.alt(
          () => pipe(
            task(...args),
            TE.chain(
              (data: T) => pipe(
                TE.rightIO(jsonPath(dir)(cacheKey(...args))),
                TE.chain((fPath: string) => writeJsonFile(fPath, data)),
                TE.map(() => data)
              ),
            ),
          ),
        ),
      );

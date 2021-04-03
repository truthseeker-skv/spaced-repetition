import { pipe } from 'fp-ts/pipeable';
import * as TE from 'fp-ts/TaskEither';
import fs from 'fs';
import path from 'path';
import * as I from 'fp-ts/IO';

import IO = I.IO;
import TaskEither = TE.TaskEither;

export const filePath = (ext: string, dir: string, name: string): IO<string> =>
  () => path.join(dir, `${name}${ext}`);

// build path to json-file
export const jsonPath = (dir: string) => (name: string) =>
  filePath('.json', dir, name);

export const createDirIfNotExists = (pth: string): TaskEither<Error, void> =>
  TE.tryCatch(
    async () => {
      const dirPath = path.dirname(pth);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    },
    (reason) => new Error(String(reason)),
  );

export const readJsonFile = <T>(filePath: string): TaskEither<Error, T> =>
  TE.tryCatch(
    async () => {
      const dataStr = fs.readFileSync(filePath, { encoding: 'utf-8' });
      return JSON.parse(dataStr);
    },
    (reason) => new Error(String(reason)),
  );

export const writeJsonFile = (filePath: string, data: unknown): TaskEither<Error, void> =>
  pipe(
    createDirIfNotExists(filePath),
    TE.fold(
      (err) => TE.left(err),
      () => TE.tryCatch(
        async () => {
          const dataStr = JSON.stringify(data, null, 2);
          await fs.writeFileSync(filePath, dataStr, { encoding: 'utf-8' });
        },
        (reason) => new Error(String(reason)),
      ),
    ),
  );

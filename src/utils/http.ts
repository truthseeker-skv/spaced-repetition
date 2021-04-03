import axios from 'axios';
import { JSDOM } from 'jsdom';
import * as TE from 'fp-ts/TaskEither';

import TaskEither = TE.TaskEither;

export const loadPageDom = (url: string): TaskEither<Error, Document> =>
  TE.tryCatch(
    async () => {
      const resp = await axios(url);
      const dom = new JSDOM(resp.data);
      return dom.window.document;
    },
    (err) => new Error(String(err)),
  );

export const downloadVideoAsBase64 = async (url: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      const buffer = Buffer.from(resp.data);
      const result = buffer.toString('base64');

      resolve('data:video/mp4;base64,' + result);
    } catch (err) {
      resolve(null);
    }
  });
}

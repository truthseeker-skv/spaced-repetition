import fs from 'fs';
import path from 'path';

import { addOrUpdateMedia } from '../services/media';

export const uploadFilesSync = async (dirPath: string): Promise<Array<string>> => {
  try {
    const mediaFiles = fs.readdirSync(dirPath)
      .filter((name) =>
        fs.lstatSync(path.join(dirPath, name)).isFile()
      );

    return Promise.all(
      mediaFiles.map((name) => addOrUpdateMedia(name, path.join(dirPath, name)))
    );
  } catch (err) {
    throw new Error(`Failed to upload media files.\r\n ${err?.message || err}`);
  }
}
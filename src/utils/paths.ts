import path from 'path';

export const getCacheDir = (dirName: string) => {
  return path.resolve(__dirname, path.join('../../cache', dirName));
};

export const getTempDir = (dirName: string) => {
  return path.resolve(__dirname, path.join('../../_temp', dirName));
};

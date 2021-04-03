import * as A from './connect';

export const addMedia = (fileName: string, path: string): Promise<string> =>
  A.send('storeMediaFile', {
    filename: fileName,
    path,
  });

export const findMedia = (fileName: string): Promise<string> =>
  A.send('retrieveMediaFile', {
    filename: fileName,
  });

export const deleteMedia = (fileName: string): Promise<null> =>
  A.send('deleteMediaFile', {
    filename: fileName,
  });

export const addOrUpdateMedia = async (fileName: string, path: string): Promise<string> => {
  const media = await findMedia(fileName);
  if (media) {
    await deleteMedia(fileName);
  }
  return addMedia(fileName, path);
}

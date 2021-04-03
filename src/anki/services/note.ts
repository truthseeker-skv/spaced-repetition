import chunk from 'lodash/fp/chunk'

import { INote } from '../note';
import * as A from './connect';

export const addNotes = async <T extends INote>(notes: T | Array<T>): Promise<unknown> => {
  const notesChunks = chunk(50)(Array<T>().concat(notes));

  return Promise.all(
    await notesChunks.map(async (ch) =>
      await A.send('addNotes', { notes: ch })
    ),
  );
}

export const findNotes = (query: string): Promise<Array<number>> =>
  A.send('findNotes', {
    query
  });

export const getNotesInfo = (notesIds: Array<number>): Promise<Array<any>> =>
  A.send('notesInfo', {
    notes: notesIds
  });

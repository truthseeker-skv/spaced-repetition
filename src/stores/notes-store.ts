import { Note } from '~/entities/note';
import { BaseStore } from '~/stores/base';


export class NotesStore extends BaseStore {
  async addNotes<T extends Partial<Note>>(notes: T | Array<T>): Promise<number | null> {
    const data = Array.isArray(notes) ? notes : [notes];

    return await this.send('addNotes', { notes: data });
  }

  async findNotes(query: string): Promise<Array<number> | null> {
    return await this.send('findNotes', { query });
  }

  async getNotesInfo(notesIds: Array<number>): Promise<Array<any> | null> {
    return await this.send('notesInfo', { notes: notesIds });
  }
}

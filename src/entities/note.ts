import { BaseEntity } from '~/entities/base';


interface NoteOptions {
  allowDuplicate: boolean;
  duplicateScope: string | null,
  duplicateScopeOptions: {
    deckName: string;
    checkChildren: boolean;
  },
}

interface Media {
  url: string;
  filename: string;
  skipHash?: string;
  fields?: Array<string>;
}

export class Note extends BaseEntity {
  deckName: string = '';

  modelName: string = '';

  fields: Record<string, string> = {
    'Front': '',
    'Back': '',
  };

  options: NoteOptions | null = null;
  // {
  //   allowDuplicate: false,
  //   duplicateScope: 'deck',
  //   duplicateScopeOptions: {
  //     deckName: '',
  //     checkChildren: false,
  //   },
  // }

  tags: Array<string> = [];

  audio: Array<Media> = [];

  video: Array<Media> = [];

  picture: Array<Media> = [];
}

import { ENoteFields } from './consts';
import { INoteDeck } from './deck';
import { INoteModel } from './services/model';

export interface INoteOptions {
  allowDuplicate: boolean;
  duplicateScope: 'deck';
  duplicateScopeOptions: {
    deckName: string;
    checkChildren: boolean;
  };
}

export interface INote {
  deckName: string;
  modelName: string;
  fields: Record<string, string>;
  options: INoteOptions;
  tags: Array<string>;
}

export interface INoteCtor {
  deck: INoteDeck;
  model: INoteModel;
  fields: Record<string, string>;
  tags?: Array<string>;
}

export function createNote({
  deck,
  model,
  fields,
  tags = [],
}: INoteCtor): INote {
  return {
    deckName: deck.name,
    modelName: model.modelName,
    fields: {
      [ENoteFields.Front]: fields[ENoteFields.Front],
      [ENoteFields.Back]: fields[ENoteFields.Back],
    },
    options: {
      allowDuplicate: false,
      duplicateScope: 'deck',
      duplicateScopeOptions: {
        deckName: deck.name,
        checkChildren: false,
      },
    },
    tags,
  };
}

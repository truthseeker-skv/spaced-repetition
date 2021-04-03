import { ENoteFields } from './consts';
import { INoteDeck } from './deck';
import { IModelBuilder } from './model';
import { createNote } from './note';
import { createDeckIfNotExists } from './services/deck';
import { INoteModel } from './services/model';
import { addNotes } from './services/note';

export interface IAnkiExportParams {
  deck: INoteDeck;
  modelBuilder: IModelBuilder;
  cards: Array<Record<ENoteFields, string>>;
}

export const ankiExport = async ({ deck, modelBuilder, cards }: IAnkiExportParams) => {
  if (!await modelBuilder.isUploaded()) {
    await modelBuilder.generate();
  }
  await createDeckIfNotExists(deck);

  return addNotes(
    createNotes(deck, modelBuilder.getModel(), cards)
  );
};

function createNotes(deck: INoteDeck, model: INoteModel, cards: Array<Record<ENoteFields, string>>) {
  return cards.map((card) => createNote({
    deck,
    model,
    fields: {
      [ENoteFields.Front]: card[ENoteFields.Front],
      [ENoteFields.Back]: card[ENoteFields.Back],
    },
  }));
}

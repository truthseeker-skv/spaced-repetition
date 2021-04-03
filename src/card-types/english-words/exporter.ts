import path from 'path';

import { ENoteFields, CARD_DATA } from '../../anki/consts';
import { getNoteDeck } from '../../anki/deck';
import { ankiExport } from '../../anki/export';
import { modelBuilder } from '../../anki/model';
import { IForeignWord } from '../../preloaders/english/models';

export const exportEngPreloadedWords = async (deck: string, words: Array<IForeignWord>) => {
  return ankiExport({
    deck: getNoteDeck(deck),
    modelBuilder: getModelBuilder(),
    cards: words.map(renderCardFields),
  })
};

function getModelBuilder() {
  return modelBuilder({
    name: 'eng-word',
    frontEntryPath: path.resolve(__dirname, './frontSide.tsx'),
    backEntryPath: path.resolve(__dirname, './backSide.tsx'),
  });
}

function renderCardFields(card: IForeignWord) {
  return {
    [ENoteFields.Front]: writeDataAsJson(card.dict.main.word, card),
    [ENoteFields.Back]: writeDataAsJson(card.dict.main.word, card),
  };
}

export function writeDataAsJson<T>(label: string, data: T): string {
  return `
    <div style="display: none">
      ${label}
      <script>
        var ${CARD_DATA} = ${JSON.stringify(data, null, 2)};
      </script>
    </div>
  `;
}

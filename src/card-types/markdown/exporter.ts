import path from 'path';

import { ENoteFields } from '../../anki/consts';
import { getNoteDeck } from '../../anki/deck';
import { ankiExport } from '../../anki/export';
import { modelBuilder } from '../../anki/model';
import { IExporterParams } from '../../exporters/models';

export const exportMarkdown = async (params: IExporterParams) => {
  return ankiExport({
    deck: getNoteDeck(params.deck),
    modelBuilder: getModelBuilder(),
    cards: [renderCardFields(params)],
  })
};

function getModelBuilder() {
  return modelBuilder({
    name: 'markdown',
    frontEntryPath: path.resolve(__dirname, './frontSide.tsx'),
    backEntryPath: path.resolve(__dirname, './backSide.tsx'),
  });
}

function renderCardFields(params: Pick<IExporterParams, 'front' | 'back'>) {
  return {
    [ENoteFields.Front]: params.front,
    [ENoteFields.Back]: params.back,
  };
}

// const builder = getModelBuilder();
// builder.watch();

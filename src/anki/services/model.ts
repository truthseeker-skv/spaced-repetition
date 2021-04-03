import { ENoteFields } from '../consts';
import * as A from './connect';

export interface INoteTemplate {
  Name: string;
  Front: string;
  Back: string;
}

export interface INoteModel {
  modelName: string;
  inOrderFields: Array<string>;
  css: string;
  cardTemplates: Array<INoteTemplate>;
}

export const getModelNames = (): Promise<Record<string, number>> =>
  A.send('modelNamesAndIds');

export const createModel = (params: INoteModel): Promise<{ id: number }> =>
  A.send('createModel', params);

export const checkIfModelUploaded = async (model: INoteModel): Promise<boolean> => {
  const names = await getModelNames();
  return !!names[model.modelName];
}

export const createOrUpdateModel = async (model: INoteModel): Promise<void> => {
  const isUploaded = await checkIfModelUploaded(model);

  if (isUploaded) {
    await updateModelTemplates(model.modelName, model.cardTemplates);
    return;
  }

  await createModel(model);
}

export const updateModelTemplates = async (modelName: string, templates: Array<INoteTemplate>): Promise<unknown> =>
  A.send('updateModelTemplates', {
    model: {
      name: modelName,
      templates: templates.reduce((acc: Record<string, unknown>, tmpl) => {
        acc[tmpl.Name] = {
          [ENoteFields.Front]: tmpl.Front,
          [ENoteFields.Back]: tmpl.Back,
        };
        return acc;
      }, {}),
    },
  });

import { BaseStore } from '~/stores/base';

interface ModelRequest {
  modelName: string;
  inOrderFields: Array<string>;
  css: string;
  cardTemplates: Array<{
    Name: string;
    Front: string;
    Back: string;
  }>;
}

export class ModelsStore extends BaseStore {
  async getModelNames(): Promise<Record<string, number> | null> {
    return await this.send('modelNamesAndIds');
  }

  async getModelFieldNames(modelName: string): Promise<Record<string, number> | null> {
    return await this.send('modelFieldNames', { modelName });
  }

  async createModel(params: ModelRequest): Promise<any> {
    return await this.send('createModel', params);
  }
}

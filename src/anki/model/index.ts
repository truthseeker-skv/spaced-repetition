import { getTempDir } from '../../utils/paths';
import { createOrUpdateModel, INoteModel, checkIfModelUploaded } from '../services/model';
import { uploadFilesSync } from '../utils/files';
import { bundleModelScripts } from './bundler';
import { getCardDynamicModel } from './react-model';

export interface IModelBuilderCtor {
  name: string;
  frontEntryPath: string;
  backEntryPath: string;
  outputPath?: string;
}

export interface IModelBuilder {
  getModel: () => INoteModel;
  isUploaded: () => Promise<boolean>;
  generate: () => Promise<void>;
  watch: () => Promise<void>;
}

export const modelBuilder = (params: IModelBuilderCtor): IModelBuilder => {
  const name = params.name;
  const outputDir = params.outputPath || getTempDir(`models/${name}`);

  const frontBundleName = `_${name}.front`;
  const backBundleName = `_${name}.back`;

  const entries = {
    [frontBundleName]: params.frontEntryPath, // path.resolve(__dirname, './frontSide.tsx')
    [backBundleName]: params.backEntryPath, // path.resolve(__dirname, './backSide.tsx')
  };

  const model = getCardDynamicModel(
    name,
    `${frontBundleName}`,
    `${backBundleName}`,
  );

  const generateModel = async (isWatch: boolean) => {
    try {
      await bundleModelScripts({
        modelName: name,
        outputDir,
        entries,
        isWatch,

        onAfterEmit: async () => {
          await uploadFilesSync(outputDir);
          await createOrUpdateModel(model);
        },
      })
    } catch (err) {
      throw new Error(`Failed to generate model.\r\n ${err?.message || err}`);
    }
  };

  const isUploaded = () => checkIfModelUploaded(model);

  return {
    getModel: () => model,
    isUploaded: () => isUploaded(),
    generate: () => generateModel(false),
    watch: () => generateModel(true),
  };
}

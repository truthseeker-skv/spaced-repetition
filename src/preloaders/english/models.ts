import { ICambridgeWord } from './services/cambridge-dictionary/models';
import { IPuzzleEnglishVideoContext } from './services/puzzle-english/video-context';

export interface IForeignWord {
  dict: ICambridgeWord;
  videoContext: Array<IPuzzleEnglishVideoContext>;
  frequency: number | null;
  thumbnailSrc: string;
}

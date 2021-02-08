import { ICard } from './ICard';


export interface IExporter {
  export(cards: Array<ICard>): void;
}

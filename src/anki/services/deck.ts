import { INoteDeck } from '../deck';
import * as A from './connect';

export const getDeckNames = (): Promise<Record<string, number>> =>
  A.send('deckNamesAndIds');

export const createDeck = (name: string): Promise<number> =>
  A.send('createDeck', { deck: name });

export const moveCardsToDeck = (deck: string, cards: Array<number>): Promise<void> =>
  A.send('changeDeck', { deck, cards });

export async function deleteDecks(name: string | Array<string>, cardsToo = true): Promise<void> {
  const names = Array<string>().concat(name);
  await A.send('deleteDecks', { decks: names, cardsToo });
}

export const createDeckIfNotExists = async (deck: INoteDeck): Promise<number> => {
  const namesToId = await getDeckNames();

  if (namesToId[deck.name]) {
    return namesToId[deck.name];
  }

  return createDeck(deck.name);
}

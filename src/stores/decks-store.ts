import { BaseStore } from '~/stores/base';


export class DecksStore extends BaseStore {

  async getDeckNames(): Promise<Record<string, number> | null> {
    return this.send('deckNamesAndIds');
  }

  async createDeck(name: string): Promise<number | null> {
    return await this.send('createDeck', { deck: name });
  }

  async moveCardsToDeck(name: string, cards: Array<number>): Promise<void> {
    await this.send('changeDeck', { deck: name, cards });
  }

  async deleteDecks(name: string | Array<string>, cardsToo = true): Promise<void> {
    const names = Array.isArray(name) ? name : [name];
    await this.send('deleteDecks', { decks: names, cardsToo });
  }

}

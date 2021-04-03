export interface INoteDeck {
  name: string;
}

export function getNoteDeck(name: string) {
  return {
    name,
  };
}

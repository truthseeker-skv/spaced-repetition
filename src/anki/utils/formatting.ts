import curry from 'lodash/curry';
import get from 'lodash/fp/get';

// Anki weirdly formats card content. It treats any '>' and '<' symbol as html tag.
const CHARS_TO_ENCODE = [
  ['<', '◀︎'],
  ['>', '▶︎'],
];

export const encodeAnkiContent = curry(replaceSymbols)(get(0), get(1));
export const decodeAnkiContent = curry(replaceSymbols)(get(1), get(0));

type CharPair = typeof CHARS_TO_ENCODE[number];

function replaceSymbols(from: (item: CharPair) => string, to: (item: CharPair) => string, content: string) {
  return CHARS_TO_ENCODE.reduce((res, ch) => {
    return res.replace(new RegExp(from(ch), 'gm'), to(ch));
  }, content);
}

import * as O from 'fp-ts/Option';

import Option = O.Option;

const find = <T extends Element>(path: string) => (root: ParentNode): Option<T> =>
  O.fromNullable(root.querySelector(path));

const findAll = <T extends Element>(path: string) => (root: ParentNode): Array<T> =>
  Array.from(root.querySelectorAll(path));

const text = (path: string) => (root: ParentNode): Option<string> =>
  O.fromNullable(root.querySelector(path)?.textContent?.trim());

const textAll = (path: string) => (root: ParentNode): Array<string> =>
  findAll(path)(root).map(it => it?.textContent ?? '');

export default {
  find,
  findAll,
  text,
  textAll,
};

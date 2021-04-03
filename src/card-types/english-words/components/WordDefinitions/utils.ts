import { uniqWith, orderBy, upperFirst } from 'lodash';

import { IWordDefinitionItem } from './DefinitionItem';

export function mergeWordDefinitions(definitions: Array<IWordDefinitionItem>) {
  const uniqPredicate = (target: string, item: string): boolean => {
    const prepare = (str: string) => str.toLowerCase().replace(/\s+/g, '').slice(0, 24);

    return prepare(target) === prepare(item);
  };

  return definitions.reduce((acc: Array<IWordDefinitionItem>, it) => {
    const existedItem = acc.find(item => uniqPredicate(item.definition, it.definition));

    if (existedItem) {
      existedItem.examples = uniqWith(existedItem.examples.concat(it.examples), uniqPredicate);
      return acc;
    }

    return acc.concat(it);
  }, []);
}

export function sortWordDefinitions(definitions: Array<IWordDefinitionItem>) {
  return orderBy(definitions, def => def.langLevel || 'ZZ');
}

export function cleanExample(example: string): string {
  return upperFirst(example.replace(/\[.+] /gm, ''));
}

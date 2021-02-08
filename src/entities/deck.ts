import { BaseEntity } from '~/entities/base';


export class Deck extends BaseEntity {
  static buildName(name: string, parents: Array<string> = []): string {
    return parents.concat(name).join('::');
  }
}

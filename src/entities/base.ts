export class BaseEntity {
  id: number | null = null;
  name: string;

  constructor(name: string, id?: number) {
    this.id = id ?? this.id;
    this.name = name;
  }

  toJson(): Partial<this> {
    return Object.keys(this).reduce((acc, item) => {
      // @ts-ignore
      if (this[item] !== null) {
        // @ts-ignore
        acc[item] = this[item];
      }
      return acc;
    }, {});
  }
}

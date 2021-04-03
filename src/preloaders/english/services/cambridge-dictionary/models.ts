export enum WordDialect {
  Uk = 'uk',
  Us = 'us',
}

export enum EVerbForms {
  First = 'first',
  Second = 'second',
  Third = 'third',
}

export interface ICambridgeWord {
  main: IWordMain;

  domains: Record<string, IWordDomain>;
  partsOfSpeech: Record<string, IPartOfSpeech>;
  meanings: Record<string, IMeaning>;
  definitions: Record<string, IDefinition>;
  examples: Record<string, IExample>;
  phrases: Record<string, IPhrase>;

  verbForms: Partial<Record<EVerbForms, IWordMain>>;
}

export const defaultWordState = (): ICambridgeWord => ({
  main: {
    word: '',
    pronunciations: {},
    transcriptions: {},
  },
  domains: {},
  partsOfSpeech: {},
  meanings: {},
  definitions: {},
  examples: {},
  phrases: {},
  verbForms: {},
});


export interface IWordMain {
  word: string;
  transcriptions: Partial<Record<WordDialect, string | null>>;
  pronunciations: Partial<Record<WordDialect, string | null>>;
}

export interface IWordDomain extends IBaseWordEntity {
}

export interface IPartOfSpeech extends IBaseWordEntity {
  domainIds: Array<string>;
}

export interface IMeaning extends IBaseWordEntity {
  domainIds: Array<string>;
  partOfSpeechIds: Array<string>;
}

export interface IPhrase extends IBaseWordEntity {
  domainIds: Array<string>;
  partOfSpeechIds: Array<string>;
  meaningIds: Array<string>;
}

export interface IDefinition extends IBaseWordEntity {
  domainIds: Array<string>;
  partOfSpeechIds: Array<string>;
  meaningIds: Array<string>;
  phraseIds: Array<string>;
  langLevel: string | null;
  tag: string | null;
}

export interface IExample extends IBaseWordEntity {
  domainIds: Array<string>;
  partOfSpeechIds: Array<string>;
  meaningIds: Array<string>;
  phraseIds: Array<string>;
  definitionIds: Array<string>;
}

export interface IBaseWordEntity {
  id: string;
  value: string;
}


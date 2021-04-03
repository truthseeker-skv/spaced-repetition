import { IForeignWord } from '../models';
import { IDefinition, EVerbForms } from './cambridge-dictionary/models';

export function selectWord(word: IForeignWord) {
  return {
    get word() {
      return word.dict.main.word;
    },
    get thumbnailSrc() {
      return word.thumbnailSrc;
    },
    get frequency() {
      return word.frequency;
    },
    get pronunciations() {
      return word.dict.main.pronunciations;
    },
    get transcriptions() {
      return word.dict.main.transcriptions;
    },
    get verbForms() {
      return word.dict.verbForms;
    },
    get definitions() {
      return Object.values(word.dict.definitions);
    },
    get videoContexts() {
      return word.videoContext;
    },
    get verbFormsArray() {
      return Object.keys(this.verbForms).reduce((acc: Array<string>, form) => {
        const formWord = word.dict.verbForms[form as EVerbForms];
        acc.push(formWord?.word ?? '');
        return acc;
      }, []);
    },
    get wordOrForms() {
      return this.verbFormsArray.length ? this.verbFormsArray : [this.word];
    },

    selectDefinition: selectDefinition(word),
  };
}

function selectDefinition(word: IForeignWord) {
  return (definition: IDefinition) => ({
    get value() {
      return definition.value;
    },
    get tag() {
      return definition.tag;
    },
    get langLevel() {
      return definition.langLevel;
    },
    get domains() {
      return Object.values(definition.domainIds).map((id) => word.dict.domains[id]);
    },
    get partsOfSpeech() {
      return Object.values(definition.partOfSpeechIds).map((id) => word.dict.partsOfSpeech[id]);
    },
    get meanings() {
      return Object.values(definition.meaningIds).map((id) => word.dict.meanings[id]);
    },
    get phrases() {
      return Object.values(definition.phraseIds).map((id) => word.dict.phrases[id]);
    },
    get examples() {
      return Object.values(word.dict.examples).filter((ex) => ex.definitionIds.includes(definition.id));
    },
  });
}

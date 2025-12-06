import { Dictionary } from '@fe/stores';

export interface DictionarySlice {
  readonly selectedLanguage: string;
  readonly possibleLanguages: string[];
  readonly selectedDictionary: Dictionary | null;
}

export const initialDictionarySlice: DictionarySlice = {
  selectedLanguage: '',
  possibleLanguages: [],
  selectedDictionary: null,
};

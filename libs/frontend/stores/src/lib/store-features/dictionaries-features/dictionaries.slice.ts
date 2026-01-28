import { Dictionary } from "@fe/tokens";

export type DictionariesSlice = {
  readonly selectedLanguage: string;
  readonly selectedDictionary: Dictionary | null;
};

export const initialDictionariesSlice: DictionariesSlice = {
  selectedLanguage: '',
  selectedDictionary: null,
};

import { PartialStateUpdater } from '@ngrx/signals';
import { DictionariesSlice } from './dictionaries.slice';


export interface Dictionary {
  [key: string]: string;
}

export function changeLanguageDictionary(
  languages: string[],
): PartialStateUpdater<DictionariesSlice> {
  // select the next language in the list one after another
  return (state) => {
    const index = languages.indexOf(state.selectedLanguage) ?? -1;
    const nextIndex = (index + 1) % languages.length;
    const selectedLanguage = languages[nextIndex];
    return { selectedLanguage };
  };
}

export function setDictionary(
  dictionary: Dictionary,
): PartialStateUpdater<DictionariesSlice> {
  // Define the selected dictionary
  return (_) => ({ selectedDictionary: dictionary });
}

export function switchLanguageDictionary(
  language: string,
): PartialStateUpdater<DictionariesSlice> {
  // Change the dictionary to the selected language
  return (_) => ({
    selectedLanguage: language,
  });
}

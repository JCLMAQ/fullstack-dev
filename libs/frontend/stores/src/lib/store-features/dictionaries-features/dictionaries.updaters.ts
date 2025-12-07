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

export function resetLanguagesDictionaries(
  languages: string[],
): PartialStateUpdater<DictionariesSlice> {
  // reset the languages store
  return (_) => ({
    possibleLanguages: languages,
    selectedLanguage: languages[0],
  });
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
  return (state) => {
    if (state.possibleLanguages.includes(language)) {
      return { selectedLanguage: language };
    }
    throw new Error(`Language ${language} is not supported`);
  };
}

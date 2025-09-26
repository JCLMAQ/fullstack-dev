import { Dictionary } from "../../../../apps/frontend/dev-app/src/app/data/dictionaries";
;

export interface DictionarySlice {
    readonly selectedLanguage: string;
    readonly possibleLanguages: string[];
    readonly selectedDictionary: Dictionary | null;
}

export const initialDictionarySlice: DictionarySlice = {
    selectedLanguage: '',
    possibleLanguages: [],
    selectedDictionary: null,
}

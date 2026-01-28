/**
 * Dictionary type compatible with existing DICTIONARIES_TOKEN
 * Maps translation keys to their values
 */
export type Dictionary = Record<string, string>;

/**
 * Dictionaries type compatible with existing DICTIONARIES_TOKEN
 * Maps language codes to their dictionaries
 */
export type Dictionaries = Record<string, Dictionary>;

/**
 * Response from /dictionaries/all endpoint
 * Groups all translations by language code
 */
export interface DictionariesResponse {
  dictionaries: Dictionaries;
  languages: string[];
}

/**
 * Word with all its translations grouped by language
 */
export interface WordWithTranslations {
  slug: string;
  type: string;
  translations: Record<string, string>; // { en: "apple", fr: "pomme", ... }
}

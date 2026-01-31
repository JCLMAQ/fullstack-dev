import { inject } from '@angular/core';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { withEntityResources } from '@ngrx/signals/entities';
import type { Translation, Word } from '../models';
import { TranslationApiService } from '../services/translation-api.service';
import { WordApiService } from '../services/word-api.service';

export interface WordWithTranslations {
  word: Word;
  translations: Record<string, Translation>;
}

export const DictionaryEntityStore = signalStore(
  withState({}),
  withEntityResources({
    words: () => inject(WordApiService).getAllResource(),
    translations: () => inject(TranslationApiService).getAllResource(),
  }),
  withComputed(({ words, translations }) => ({
    wordsWithTranslations: () => {
      const allWords = words();
      const allTranslations = translations();
      if (!allWords || !allTranslations) return [];
      return allWords.map(word => {
        const translationsByLang: Record<string, Translation> = {};
        allTranslations.forEach(t => {
          if (t.wordId === word.id && t.language?.code) {
            translationsByLang[t.language.code] = t;
          }
        });
        return { word, translations: translationsByLang };
      });
    },
  }))
);

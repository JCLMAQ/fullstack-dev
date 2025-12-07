import { computed, inject } from '@angular/core';
import { DICTIONARIES_TOKEN } from '@fe/tokens';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { getDictionary } from './dictionaries.helpers';
import { Dictionaries } from './dictionary.model';

// Base on Koby-Hary-Udemy NGRX Signals Courses

export function withDictionariesFeatures(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      possibleLanguages: [] as string[],
      selectedLanguage: '' as string,
    })),
    withProps(() => ({
      _dictionaries: inject(DICTIONARIES_TOKEN) as Dictionaries,
    })),
    withComputed((store) => {
      return {
        selectedDictionary: computed(() =>
          getDictionary(store.selectedLanguage(), store._dictionaries),
        ),
      };
    }),
    withMethods((store) => {
      const languages = Object.keys(store._dictionaries);
      return {
        changeLanguage: () => {
          const currentIndex = languages.indexOf(store.selectedLanguage());
          const nextIndex = (currentIndex + 1) % languages.length;
          const nextLanguage = languages[nextIndex];
          patchState(store, { selectedLanguage: nextLanguage });
        },
      };
    }),
    withHooks((store) => ({
      onInit: () => {
        const languages = Object.keys(store._dictionaries);
        patchState(store, {
          possibleLanguages: languages,
          selectedLanguage: languages[0],
        });
      },
    })),
  );
}

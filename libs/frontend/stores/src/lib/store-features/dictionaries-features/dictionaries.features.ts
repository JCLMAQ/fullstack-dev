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
import { getDictionaryHelper } from './dictionaries.helpers';

import { Dictionaries } from '@fe/models';
import { TranslateService } from '@ngx-translate/core';

// Base on Koby-Hary-Udemy NGRX Signals Courses

export function withDictionariesFeatures(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      possibleLanguages: [] as string[],
      selectedLanguage: '' as string,
    })),
    withProps(() => ({
      _dictionaries: inject(DICTIONARIES_TOKEN) as Dictionaries,
      _ngxtranslateService: inject(TranslateService),
    })),
    withComputed((store) => {
      return {
        selectedDictionary: computed(() =>
          getDictionaryHelper(store.selectedLanguage(), store._dictionaries),
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
          store._ngxtranslateService.use(nextLanguage);
          console.log(`🌐 Language changed to: ${nextLanguage}`);
        },
         switchLanguage: (language: string) => {
          const nextLanguage = language;
          patchState(store, { selectedLanguage: nextLanguage });
          store._ngxtranslateService.use(nextLanguage);
          console.log(`🌐 Language changed to: ${nextLanguage}`);
        },
      };
    }),
    withHooks((store) => ({
      onInit: () => {
        store._ngxtranslateService.use(store._ngxtranslateService.getBrowserLang() || 'en'); // use browser language by default
        const currentLanguage = store._ngxtranslateService.getCurrentLang()
        console.log(`🌐 Detected Browser Language: ${store._ngxtranslateService.getBrowserLang()}`);
        const languages = Object.keys(store._dictionaries);
        patchState(store, {
          possibleLanguages: languages,
          // selectedLanguage: languages[0],
          selectedLanguage: currentLanguage
        });
        console.log(`🌐 Current Language on init: ${currentLanguage}`);
      },
    })),
  );
}

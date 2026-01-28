import { computed, inject } from '@angular/core';
import { DictionaryApiService } from '@fe/dictionary';
import type { Dictionaries } from '@fe/models';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { catchError, of, pipe, switchMap, tap } from 'rxjs';
import { getDictionaryHelper } from './dictionaries.helpers';

/**
 * Feature that manages dictionaries loaded from API
 * Replaces static DICTIONARIES_TOKEN with dynamic loading from backend
 */
export function withDictionariesFeatures(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      selectedLanguage: '' as string,
      _dictionaries: {} as Dictionaries,
      _dictionariesLoaded: false,
      _dictionariesLoading: false,
      _dictionariesError: null as string | null,
    })),
    withComputed((store) => {
      return {
        selectedDictionary: computed(() =>
          getDictionaryHelper(store.selectedLanguage(), store._dictionaries())
        ),
      };
    }),
    withMethods(
      (
        store,
        dictionaryApi = inject(DictionaryApiService),
        translateService = inject(TranslateService)
      ) => {
        return {
          /**
           * Load all dictionaries from API
           */

          //!!! Todo: switch to httpResource

          loadDictionaries: rxMethod<void>(
            pipe(
              tap(() => patchState(store, { _dictionariesLoading: true })),
              switchMap(() =>
                dictionaryApi.loadAllDictionaries().pipe(
                  tap((dictionaries: Dictionaries) => {
                    patchState(store, {
                      _dictionaries: dictionaries,
                      _dictionariesLoaded: true,
                      _dictionariesLoading: false,
                      _dictionariesError: null,
                    });
                    console.log(
                      `✅ Dictionaries loaded from API: ${Object.keys(dictionaries).join(', ')}`
                    );
                  }),
                  catchError((error: Error) => {
                    patchState(store, {
                      _dictionariesLoading: false,
                      _dictionariesError: error.message,
                    });
                    console.error('❌ Failed to load dictionaries:', error);
                    return of({} as Dictionaries);
                  })
                )
              )
            )
          ),

          /**
           * Change to next language in the list
           */
          changeLanguage: () => {
            const languages = Object.keys(store._dictionaries());
            if (languages.length === 0) return;

            const currentIndex = languages.indexOf(store.selectedLanguage());
            const nextIndex = (currentIndex + 1) % languages.length;
            const nextLanguage = languages[nextIndex];

            patchState(store, { selectedLanguage: nextLanguage });
            translateService.use(nextLanguage);
            console.log(`🌐 Language changed to: ${nextLanguage}`);
          },

          /**
           * Switch to a specific language
           */
          switchLanguage: (language: string) => {
            patchState(store, { selectedLanguage: language });
            translateService.use(language);
            console.log(`🌐 Language switched to: ${language}`);
          },
        };
      }
    ),
    withHooks((store, translateService = inject(TranslateService)) => ({
      onInit: () => {
        // Load dictionaries from API
        store.loadDictionaries();

        // Set browser language as default
        const browserLang = translateService.getBrowserLang() || 'en';
        translateService.use(browserLang);

        patchState(store, { selectedLanguage: browserLang });

        console.log(`🌐 Detected Browser Language: ${browserLang}`);
        console.log(`🌐 Current Language on init: ${browserLang}`);
      },
    }))
  );
}

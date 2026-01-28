import { httpResource } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { DictionaryApiService, type DictionariesResponse } from '@fe/dictionary';
import {
    patchState,
    signalStoreFeature,
    SignalStoreFeature,
    withComputed,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { TranslateService } from '@ngx-translate/core';
import { getDictionaryHelper } from './dictionaries.helpers';

/**
 * Feature that manages dictionaries loaded from API
 * Uses httpResource for automatic state management (loading, error, value)
 */
export function withDictionariesFeatures(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      selectedLanguage: '' as string,
    })),
    withMethods(
      (
        store,
        dictionaryApi = inject(DictionaryApiService),
        translateService = inject(TranslateService)
      ) => {
        // Create httpResource for automatic HTTP GET and state management
        // httpResource fetches data from the URL signal and provides loading/error states
        const dictionariesResource = httpResource<DictionariesResponse>(
          () => dictionaryApi.dictionariesUrl()
        );

        return {
          // Expose resource through a getter method
          getDictionariesResource: () => dictionariesResource,

          /**
           * Load all dictionaries from API
           * Uses httpResource.reload() for automatic state management
           */
          loadDictionaries: () => {
            const success = dictionariesResource.reload();
            if (success) {
              console.log('🔄 Dictionaries reload triggered');
            }
          },

          /**
           * Change to next language in the list
           */
          changeLanguage: () => {
            const response = dictionariesResource.value();
            const dictionaries = response?.dictionaries ?? {};
            const languages = Object.keys(dictionaries);
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

          /**
           * Reset dictionaries to initial state (called on logout)
           */
          resetDictionaries: () => {
            patchState(store, {
              selectedLanguage: '',
            });
            // Note: httpResource state is managed automatically, no manual reset needed
            console.log(`🔄 Dictionaries reset to initial state`);
          },
        };
      }
    ),
    withComputed((store) => {
      const resource = store.getDictionariesResource();
      return {
        // Expose httpResource signals
        dictionariesValue: computed(() => resource.value()?.dictionaries ?? {}),
        dictionariesLoading: computed(() => resource.isLoading()),
        dictionariesError: computed(() => resource.error()),

        selectedDictionary: computed(() =>
          getDictionaryHelper(store.selectedLanguage(), resource.value()?.dictionaries ?? {})
        ),
      };
    }),
    withHooks((store, translateService = inject(TranslateService)) => ({
      onInit: () => {
        // Load dictionaries from API using httpResource
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

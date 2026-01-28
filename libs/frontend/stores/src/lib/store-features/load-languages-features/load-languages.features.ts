import { effect, inject } from '@angular/core';
import { LanguageService } from '@fe/services';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

/**
 * Feature that manages available languages loaded from API with fallback to static list
 * Adds:
 * - State: availableLanguages (string[])
 * - State: languagesResource (httpResource)
 * - Method: reloadLanguages() to trigger a new fetch
 */
export function withLoadLanguagesFeature(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      availableLanguages: [] as string[],
      availableLanguagesLoading: false,
      availableLanguagesError: undefined as Error | undefined,
    })),
    withMethods((store, languageService: LanguageService = inject(LanguageService)) => {
      return {
        loadLanguages: () => {
          languageService.reloadAvailableLanguages();
        },
      };
    }),
    withHooks((store) => {
      const languageService = inject(LanguageService);
      const syncEffect = effect(() => {
        patchState(store, {
          availableLanguages: languageService.availableLanguageCodes(),
          availableLanguagesLoading: languageService.availableLanguagesLoading(),
          availableLanguagesError: languageService.availableLanguagesError(),
        });
      });
      return {
        onInit: () => {
          store.loadLanguages();
        },
        onDestroy: () => {
          syncEffect.destroy();
        },
      };
    }),
  );
}

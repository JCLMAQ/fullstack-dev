import { inject } from '@angular/core';
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
    })),
    withMethods((store, languageService: LanguageService = inject(LanguageService)) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const resource = languageService.availableLanguagesResource() as any;
      return {
        loadLanguages: () => {
          console.log('🔄 Loading available languages from httpResource...');
          patchState(store, {
            availableLanguages: resource.value() ?? [],
          });
        },
      };
    }),
    withHooks((store) => ({
      onInit: () => {
        store.loadLanguages();
      },
    })),
  );
}

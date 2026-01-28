import { inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { LanguageService } from '@fe/services';

/**
 * Feature that manages available languages loaded from API with fallback to static list
 * Adds:
 * - State: availableLanguages (string[])
 * - Method: loadLanguages() via rxMethod
 */
export function withLoadLanguagesFeature(): SignalStoreFeature {
  return signalStoreFeature(
    withState(() => ({
      availableLanguages: [] as string[],
    })),
    withMethods((store, languageService: LanguageService = inject(LanguageService)) => {
      return {
        // !! Refactoriser en utilisant httpRessource
        loadLanguages: rxMethod<void>(
          pipe(
            switchMap(() => {
              console.log('🔄 Loading available languages from API...');
              return languageService.getAvailableLanguages();
            }),
            tap((languages: string[]) => {
              patchState(store, { availableLanguages: languages });
              console.log(
                `✅ Available languages loaded: ${languages.join(', ')}`
              );
            })
          )
        ),
      };
    }),
    withHooks((store) => ({
      onInit: () => {
        // Load languages from API on store initialization
        store.loadLanguages();
      },
    })),
  );
}

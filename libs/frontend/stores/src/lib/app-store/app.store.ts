import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withAppAuthFeatures } from '../store-features/authentication-features/authentication.features';
import { withDictionariesFeatures } from '../store-features/dictionaries-features/dictionaries.features';
import { withLoadLanguagesFeature } from '../store-features/load-languages-features/load-languages.features';
import { initialAppSlice } from './app.slice';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice), // État initial défini UNE SEULE FOIS
  withDevtools('AppStore'),
  withStorageSync({
    key: 'AppStore',
    // Exclude availableLanguages from persisted state (reload from API on every startup)
    select: (state) => {
      const { availableLanguages, ...rest } = state as Record<string, unknown>;
      return rest;
    },
  }),
  // Auth part   // 🔄 Synchronisation avec service d'authentification
  withAppAuthFeatures(), // Add: login(), logout(), register()

  // Languages part
  withDictionariesFeatures(), // Add  selectedLanguage, possibleLanguages, selectedDictionary, changeLanguage()
  withLoadLanguagesFeature(), // Add availableLanguages, loadLanguages()

  withMethods((store) => ({
   // Met à jour l'avatar de l'utilisateur dans le signal user
    updateUserAvatar(avatarUrl: string) {
      const user = store.user();
      if (!user) return;
      patchState(store, { user: { ...user, photoUrl: avatarUrl } });
    },
  })),
);

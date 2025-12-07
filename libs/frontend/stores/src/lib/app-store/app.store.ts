import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withAppAuthFeatures } from '../store-features/authentication-features/authentication.features';
import { initialAppSlice } from './app.slice';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice), // État initial défini UNE SEULE FOIS
  withDevtools('AppStore'),
  withStorageSync('AppStore'),
  // Auth part
  withAppAuthFeatures(), // Add: login(), logout(), register()

  // Languages part
  // withDictionariesFeatures(), // Add  selectedLanguage, possibleLanguages, selectedDictionary, changeLanguage()

  withMethods((store) => ({
    updateUserAvatar(avatarUrl: string) {
      const user = store.user();
      if (!user) return;
      patchState(store, { user: { ...user, photoUrl: avatarUrl } });
    },
  })),
  /**
   * Met à jour l'avatar de l'utilisateur dans le signal user
   */
  //   updateUserAvatar(avatarUrl: string) {
  //     const user = this.user();
  //     if (!user) return;
  //     this.user.set({ ...user, avatar: avatarUrl });
  //   }
  // })
  // 🔄 Synchronisation avec service d'authentification
  // withAuthSync(), // Synchronise avec IamAuth localStorage, évite la duplication
);

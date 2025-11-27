import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { withAuthSync } from "@fe/auth";
import { signalStore, withComputed, withState } from "@ngrx/signals";
import { withAppAuthFeatures } from "../store-features/authentication-features/authentication.features";
import { withDictionariesFeatures } from "../store-features/dictionaries-features/dictionaries.features";
import { initialAppSlice } from "./app.slice";

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice), // État initial défini UNE SEULE FOIS
  withDevtools('AppStore'),

  // Auth part
  withAppAuthFeatures(), // Add: login(), logout(), register()

  // Languages part
  withDictionariesFeatures(), // Add  selectedLanguage, possibleLanguages, selectedDictionary, changeLanguage()

  // 🔄 Synchronisation avec service d'authentification
  withAuthSync(), // Synchronise avec IamAuth localStorage, évite la duplication

  // Expose computed selector for isAdmin
  withComputed((store) => ({
    isAdmin: () => store['isAdmin'],
  })),
);

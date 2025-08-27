import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { NotificationsService } from '../../../../../../libs/frontend/services/src/index';
import { withBusy } from '../../../../../../libs/frontend/store-features/src/index';
import { DictionariesService } from '../services/dictionaries.service';

import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { Dictionary } from '../data/dictionaries';
import { DICTIONARIES_TOKEN } from '../tokens/dictionaries.token';
import { initialAppSlice } from './app.slice';
import {
  changeLanguage,
  resetLanguages,
  switchLanguage
} from './app.updaters';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice),
  withBusy(),
  withProps((_) => {
    const _dictionariesService = inject(DictionariesService);
    const _languages = _dictionariesService.languages;
    const _dictionaries = inject(DICTIONARIES_TOKEN);

    return {
      _dictionariesService,
      _dictionaries,
      _languages,
      _notifications: inject(NotificationsService),
    };
  }),
  withMethods((store) => {
      const dictionaries = inject(DICTIONARIES_TOKEN);
      const languages = Object.keys(dictionaries);
        return {
            changeLanguage: () => patchState(store, changeLanguage(languages)),
            switchLanguage: (language: string) => patchState(store,  switchLanguage(language) ),
            setDictionary: (dictionary: Dictionary) => patchState(store, { selectedDictionary: dictionary }),
            _resetLanguages: () => patchState(store, resetLanguages(languages))
        }
  }),
  withHooks((store) => ({
    onInit: () => {
     const dictionaries = inject(DICTIONARIES_TOKEN);
            const languages = Object.keys(dictionaries);
            patchState(store, {
                possibleLanguages: languages,
                selectedLanguage: languages[0]
            })
    },
  })),
  withDevtools('app-store')
);

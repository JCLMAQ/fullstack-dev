import { Route } from '@angular/router';
import { isUserAuthenticated } from '@fe/core/auth';
import { DictionaryTable } from './dictionary-table/dictionary-table';
import { Dictionary } from './dictionary/dictionary';



export const dictionaryRoutes: Route[] = [
  {
    path: '',
    canActivate: [isUserAuthenticated],
   // Store partagé pour toutes les routes enfants
    children: [
      { path: '', component: DictionaryTable },
      { path: 'list', component: Dictionary },
      { path: 'dictionary', component: Dictionary },
      { path: 'dictionarytable', component: DictionaryTable },

    ]
  },
];

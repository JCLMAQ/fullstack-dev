import { Route } from '@angular/router';
import { isUserAuthenticated } from '@fe/core/auth';
const loadDictionary = () => import('./dictionary/dictionary').then(({ Dictionary }) => Dictionary);
const loadDictionaryTable = () =>
  import('./dictionary-table/dictionary-table').then(({ DictionaryTable }) => DictionaryTable);



export const dictionaryRoutes: Route[] = [
  {
    path: '',
    canActivate: [isUserAuthenticated],
   // Store partagé pour toutes les routes enfants
    children: [
      { path: '', loadComponent: loadDictionaryTable },
      { path: 'list', loadComponent: loadDictionary },
      { path: 'dictionary', loadComponent: loadDictionary },
      { path: 'dictionarytable', loadComponent: loadDictionaryTable },

    ]
  },
];

import { InjectionToken } from '@angular/core';
// On n'importe pas IamAuth ici pour éviter toute dépendance croisée
export const LOCALSTORAGE_CLEANER_TOKEN = new InjectionToken<any>('LOCALSTORAGE_CLEANER_TOKEN');

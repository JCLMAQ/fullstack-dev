import { InjectionToken } from '@angular/core';
// On n'importe pas IamAuth ici pour éviter toute dépendance croisée
export const IAM_AUTH_TOKEN = new InjectionToken<any>('IAM_AUTH_TOKEN');

import { inject, InjectionToken } from '@angular/core';
import { IamAuth } from './iam-auth';
// On n'importe pas IamAuth ici pour éviter toute dépendance croisée
// export const IAM_AUTH_TOKEN = new InjectionToken<any>('IAM_AUTH_TOKEN');
export const IAM_AUTH_TOKEN = new InjectionToken<IamAuth>('IAM_AUTH_TOKEN', {
  providedIn: 'root',
  factory: () => inject(IamAuth),
});

import { InjectionToken } from '@angular/core';
import { IamAuth } from '../../iam-auth/iam-auth';

export const IAM_AUTH_TOKEN = new InjectionToken<IamAuth>(
  'IAM_AUTH_TOKEN',
);

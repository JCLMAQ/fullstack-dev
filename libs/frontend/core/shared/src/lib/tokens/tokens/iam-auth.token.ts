import { InjectionToken } from '@angular/core';
import { IamAuth } from '@frontend/core/auth';

export const IAM_AUTH_TOKEN = new InjectionToken<IamAuth>(
  'IAM_AUTH_TOKEN',
);

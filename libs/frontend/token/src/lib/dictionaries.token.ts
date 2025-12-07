import { InjectionToken } from '@angular/core';
import { Dictionaries } from '@fe/models';

export const DICTIONARIES_TOKEN = new InjectionToken<Dictionaries>(
  'DICTIONARIES_TOKEN',
);

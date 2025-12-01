import { InjectionToken } from '@angular/core';
import type { Environment } from './environment.model';

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');

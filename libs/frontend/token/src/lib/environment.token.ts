import { InjectionToken } from '@angular/core';
import type { Environment } from './models/environment.model';

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');

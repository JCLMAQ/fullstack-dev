import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { DICTIONARIES_TOKEN, MENU_ITEMS_TOKEN } from '@fe/tokens';
import { appRoutes } from './app.routes';
import { DICTIONARIES } from './data/dictionaries';
import { APP_MENU_ITEMS } from './data/menu-items';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes, withComponentInputBinding()),

    provideHttpClient(
          withFetch(),
          withInterceptors([
            // AuthInterceptor,
            // LoggingInterceptor,
          ]),
        ),

    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix:"i18n/",
        suffix:".json",
        enforceLoading: true,
        useHttpBackend: true,
      }),
    }),

    provideNativeDateAdapter(),

  { provide: DICTIONARIES_TOKEN, useValue: DICTIONARIES },
  { provide: MENU_ITEMS_TOKEN, useValue: APP_MENU_ITEMS }

  ],
};

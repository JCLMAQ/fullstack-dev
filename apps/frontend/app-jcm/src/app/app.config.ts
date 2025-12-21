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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LocalStorageCleanerService } from '@fe/shared';
import { DICTIONARIES_TOKEN, ENVIRONMENT_TOKEN, LOCALSTORAGE_CLEANER_TOKEN, MENU_ITEMS_TOKEN } from '@fe/tokens';
// import { DICTIONARIES_TOKEN } from '@fe/util/tokens/dictionaries.token';
import { appRoutes } from './app.routes';
import { DICTIONARIES } from './data/dictionaries';
import { APP_MENU_ITEMS } from './data/menu-items';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { provideSignalFormsConfig, SignalFormsConfig } from '@angular/forms/signals';
import { AuthInterceptor, LoggingInterceptor, provideAppErrorHandler } from '@fe/shared';
import { ENVIRONMENT_DATA } from '../../environments/environment';

const NG_STATUS_CLASSES: SignalFormsConfig['classes'] = {
  // 'app-disabled': ({ state }) => state.disabled(),
  // 'app-touched': ({ state }) => state.touched(),
  // 'app-untouched': ({ state }) => !state.touched(),
  // 'app-dirty': ({ state }) => state.dirty(),
  // 'app-pristine': ({ state }) => !state.dirty(),
  // 'app-valid': ({ state }) => state.valid(),
  // 'app-invalid': ({ state }) => state.invalid() && state.touched(),
  // 'app-pending': ({ state }) => state.pending(),
        // 1. Success State: Green ring when valid and dirty (user typed something correct)
        'ring-2': ({ state }) => state().valid() && state().dirty(),
        //{ [className: string]: (state: Field<unknown>) => boolean; } | undefined
        'ring-green-500': ({ state }) => state().valid() && state().dirty(),
        'border-green-500': ({ state }) => state().valid() && state().dirty(),
        // 2. Error State: Red ring when invalid and touched (user blurred the field)
        'ring-red-500': ({ state }) => state().invalid() && state().touched(),
        'border-red-500': ({ state }) => state().invalid() && state().touched(),
        'bg-red-50': ({ state }) => state().invalid() && state().touched(),
        // 3. Pending State: Blue pulse during async validation (like our City check)
        'animate-pulse': ({ state }) => state().pending(),
        'bg-blue-50': ({ state }) => state().pending(),
};

// provideSignalFormsConfig({
//      classes: {
//         'my-invalid-class': ({ state }) => state.invalid(),
//         'multiline': ({ element }) =>
//                           element.tagName.toLowerCase() === 'textarea'
//       },
//     }),

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes, withComponentInputBinding()),
    // provideAnimations(),

    provideHttpClient(
          withFetch(),
          withInterceptors([
            AuthInterceptor,
            LoggingInterceptor,
          ]),
        ),

    provideTranslateService({
      lang: 'fr',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix:"i18n/",
        suffix:".json",
        enforceLoading: true,
        useHttpBackend: true,
      }),
    }),

    provideNativeDateAdapter(),
  // Provide the translaton dictionary for the dictionary store
  // { provide: DICTIONARIES_TOKEN, useValue: dictionaries },
  { provide: DICTIONARIES_TOKEN, useValue: DICTIONARIES },
  // Provide the menu items for the left menu
  { provide: MENU_ITEMS_TOKEN, useValue: APP_MENU_ITEMS },
  // Provide the environment configuration for the API URL and other settings
  { provide: ENVIRONMENT_TOKEN, useValue: ENVIRONMENT_DATA },
  // Provide the Authentication Service :
  // Ne pas fournir explicitement IAM_AUTH_TOKEN ici.
  // Angular utilisera la factory fournie dans iam-auth.token.ts (providedIn: 'root').
  { provide: LOCALSTORAGE_CLEANER_TOKEN, useClass: LocalStorageCleanerService },
  {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        floatLabel: 'never',
        subscriptSizing: 'dynamic',
      },
    },
    provideAppErrorHandler(),

    // https://medium.com/@amosisaila/angular-21-0-1-the-missing-style-link-in-signal-forms-bb8571e90f61
    provideSignalFormsConfig({
      classes: NG_STATUS_CLASSES
    })
  ],
};

/* Css pour les champs de formulaire en Signal Forms:
input {

  // touched vs untouched
  &.app-untouched {
    background-color: rgba(white, 0.05);
  }

  &.app-touched {
    background-color: rgba(#007bff, 0.15);
  }

  // dirty vs pristine
  &.app-dirty {
    box-shadow: 0 0 0 2px rgba(#007bff, 0.12);
  }

  // valid vs invalid
  &.app-touched.app-invalid {
    border-color: #e53935;
  }

  &.app-touched.app-valid {
    border-color: #43a047;
  }

  // pending
  &.app-pending {
    border-color: orange;
  }

}
  */

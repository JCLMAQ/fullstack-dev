## Localization

The country selector now supports locale-aware display names and accent-insensitive search. Enable localization per instance with `[localizeCountryNames]="true"`. When disabled (default) the component keeps the original English dataset.

If the browser exposes [`Intl.DisplayNames`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames), the component will resolve translated labels for the active `LOCALE_ID`. You can override specific entries through the `COUNTRY_NAME_OVERRIDES` token:

```ts
import { COUNTRY_NAME_OVERRIDES, CountryNameOverrides } from 'ngx-material-intl-tel-input';

const spanishCountryOverrides: CountryNameOverrides = {
  US: 'Estados Unidos de América',
  MX: 'Estados Unidos Mexicanos'
};

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'be-BE' },
    {
      provide: COUNTRY_NAME_OVERRIDES,
      useValue: spanishCountryOverrides
    }
  ]
});
```

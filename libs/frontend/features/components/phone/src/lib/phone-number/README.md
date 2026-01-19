# README

Base on: <https://github.com/juanjotorres90/ngx-material-intl-tel-input>

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

## Options

### Display Options

| Option                 | Type      | Default     | Description                             |
|------------------------|-----------|-------------|-----------------------------------------|
| `appearance`           | `'fill'   | 'outline'`  | Material form field appearance          |
| `emojiFlags`           | `boolean` | `false`     | Use emoji icons instead of SVG flags    |
| `hidePhoneIcon`        | `boolean` | `false`     | Hide the phone icon                     |
| `enablePlaceholder`.   | `boolean` | `true`      | Show input placeholder for each country |
| `iconMakeCall`         | `boolean` | `true`      | Enable click-to-call on phone icon      |
| `localizeCountryNames` | `boolean` | `false`     | Use locale-aware country names          |

### Country Selection

| Option                | Type                       | Default | Description                      |
|-----------------------|----------------------------|---------|----------------------------------|
| `autoSelectCountry`   | `boolean`                  | `true`  | Country to auto-select           |
| `autoIpLookup`        | `boolean`                  | `true`  | Detect country from IP address   |
| `preferredCountries`  | `(CountryISO \| string)[]` | `[]`    | Countries to show at top of list |
| `visibleCountries`    | `(CountryISO \| string)[]` | `[]`    | Only show these countries        |
| `excludedCountries`   | `(CountryISO \| string)[]` | `[]`    | Exclude these countries.         |

### Input Behavior

| Option                 | Type      | Default | Description               |
|------------------------|-----------|---------|---------------------------|
| `required`             | `boolean` | `false` | Make phone field required |
| `disabled`             | `boolean` | `false` | Disable phone field       |
| `enableSearch`         | `boolean` | `true`  | Enable country search     |
| `numberValidation`     | `boolean` | `true`  | Validate phone numbers    |
| `enableInputMaxLength` | `boolean` | `true`  | Enforce max length        |

### Input Format

| Option                     | Type                | Default         | Description                                  |
|----------------------------|---------------------|-----------------|----------------------------------------------|
| `initialValue`             | `string`            | `''`            | Initial phone number                         |
| `useMask`                  | `boolean`           | `false`         | Use input mask for formatting                |
| `forceSelectedCountryCode` | `boolean`           | `false`         | Show country code with mask                  |
| `showMaskPlaceholder`      | `boolean`           | `false`         | Show mask placeholder                        |
| `includeDialCode`          | `boolean`           | `false`         | Include dial code in number                  |
| `outputNumberFormat`       | `PhoneNumberFormat` | `INTERNATIONAL` | Output format (INTERNATIONAL, E164, RFC3966) |

### Labels & Text

| Option | Type | Default          | Description |.                            |
|---------------|------------------|-------------|-----------------------------|
| `mainLabel`   | `string`         | `''`        | Override main field label   |
| `textLabels`  | `TextLabels`     | *See below* | Override all component text |

**Default TextLabels:**

```typescript
{
  mainLabel: 'Phone number',
  codePlaceholder: 'Code',
  searchPlaceholderLabel: 'Search',
  noEntriesFoundLabel: 'No countries found',
  nationalNumberLabel: 'Number',
  hintLabel: 'Select country and type your phone number',
  invalidNumberError: 'Number is not valid',
  requiredError: 'This field is required',
  numberTooLongError: 'Phone number is too long'
}
```

## Events

| Event              | Type     | Default | Description                                                          |
| ------------------ | -------- | ------- | -------------------------------------------------------------------- |
| currentValue       | `string` | `''`    | Full phone number value emitted when the value of the input changes. |
| currentCountryCode | `string` | `''`    | Country code value emitted when the value of the input changes.      |
| currentCountryISO  | `string` | `''`    | Country ISO value emitted when the value of the input changes.       |

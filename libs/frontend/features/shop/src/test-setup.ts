import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

// jsdom does not expose the browser structuredClone API.
import { serialize, deserialize } from 'node:v8';
globalThis.structuredClone ??= (value) => deserialize(serialize(value));

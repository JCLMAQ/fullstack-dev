import { pattern, required, schema, SchemaPathTree } from '@angular/forms/signals';
import { Address } from '@db/prisma/browser';

// Model factory for address form
export function createAddressModel(): Address {
  return {
    id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '',
    street: '',
    buildingNum: '',
    aptNum: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    countryIso: '',
    addressType: null,
    isPrimary: false
  };
}

// Schema for address validation
export const addressSchema = schema<Address>((a) => [
  required(a.street, { message: 'address.streetRequired' }),
  required(a.buildingNum, { message: 'address.buildingNumberRequired' }),
  required(a.city, { message: 'address.cityRequired' }),
  required(a.country, { message: 'address.countryRequired' }),
  required(a.zipCode, { message: 'address.zipCodeRequired' }),
  pattern(a.zipCode, /^\d{5}$/, { message: 'address.zipCodeMustBe5Digits' }),
]);

// Form builder for address fields (legacy - use addressSchema instead)
export function buildAddressSection(a: SchemaPathTree<Address>) {
  required(a.street, { message: 'address.streetRequired' });
  required(a.buildingNum, { message: 'address.buildingNumberRequired' });
  required(a.city, { message: 'address.cityRequired' });
  required(a.country, { message: 'address.countryRequired' });
  required(a.zipCode, { message: 'address.zipCodeRequired' });
  pattern(a.zipCode, /^\d{5}$/, { message: 'address.zipCodeMustBe5Digits' });
}



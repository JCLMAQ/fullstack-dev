import { pattern, required, schema, SchemaPathTree } from '@angular/forms/signals';
import { Address } from '@db/prisma';

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
    addressType: null,
    isPrimary: false
  };
}

// Schema for address validation
export const addressSchema = schema<Address>((a) => [
  required(a.street, { message: 'Street is required' }),
  required(a.buildingNum, { message: 'Building number is required' }),
  required(a.city, { message: 'City is required' }),
  required(a.country, { message: 'Country is required' }),
  required(a.zipCode, { message: 'ZIP code is required' }),
  pattern(a.zipCode, /^\d{5}$/, { message: 'ZIP code must be 5 digits' }),
]);

// Form builder for address fields (legacy - use addressSchema instead)
export function buildAddressSection(a: SchemaPathTree<Address>) {
  required(a.street, { message: 'Street is required' });
  required(a.buildingNum, { message: 'Building number is required' });
  required(a.city, { message: 'City is required' });
  required(a.country, { message: 'Country is required' });
  required(a.zipCode, { message: 'ZIP code is required' });
  pattern(a.zipCode, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });
}



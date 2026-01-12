import { pattern, required, SchemaPathTree } from '@angular/forms/signals';
import { Address } from '@db/prisma';

// Model factory for address form
export function createAddressModel(): Address {
  return {
    id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    addressType: null,
    isPrimary: false
  };
}

// Form builder for address fields
export function buildAddressSection(a: SchemaPathTree<Address>) {
  required(a.street, { message: 'Street is required' });
  required(a.city, { message: 'City is required' });
  required(a.state, { message: 'State is required' });
  required(a.zipCode, { message: 'ZIP code is required' });
  pattern(a.zipCode, /^\d{5}$/, { message: 'ZIP code must be 5 digits' });
}



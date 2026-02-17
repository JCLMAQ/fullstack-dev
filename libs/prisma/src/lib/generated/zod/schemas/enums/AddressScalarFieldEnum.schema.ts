import * as z from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'userId', 'street', 'buildingNum', 'aptNum', 'city', 'state', 'zipCode', 'country', 'countryIso', 'addressType', 'isPrimary'])

export type AddressScalarFieldEnum = z.infer<typeof AddressScalarFieldEnumSchema>;
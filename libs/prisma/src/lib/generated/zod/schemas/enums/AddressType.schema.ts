import * as z from 'zod';

export const AddressTypeSchema = z.enum(['Home', 'Work', 'Organisation', 'Other'])

export type AddressType = z.infer<typeof AddressTypeSchema>;
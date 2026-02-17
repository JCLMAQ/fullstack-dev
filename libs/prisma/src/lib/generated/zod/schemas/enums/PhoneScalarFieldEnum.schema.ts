import * as z from 'zod';

export const PhoneScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'userId', 'countryCode', 'countryIso', 'number', 'extension', 'phoneType', 'isPrimary'])

export type PhoneScalarFieldEnum = z.infer<typeof PhoneScalarFieldEnumSchema>;
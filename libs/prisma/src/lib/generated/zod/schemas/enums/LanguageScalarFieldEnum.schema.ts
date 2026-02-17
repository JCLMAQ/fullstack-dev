import * as z from 'zod';

export const LanguageScalarFieldEnumSchema = z.enum(['id', 'code', 'name'])

export type LanguageScalarFieldEnum = z.infer<typeof LanguageScalarFieldEnumSchema>;
import * as z from 'zod';

export const TranslationScalarFieldEnumSchema = z.enum(['id', 'text', 'definition', 'wordId', 'languageId'])

export type TranslationScalarFieldEnum = z.infer<typeof TranslationScalarFieldEnumSchema>;
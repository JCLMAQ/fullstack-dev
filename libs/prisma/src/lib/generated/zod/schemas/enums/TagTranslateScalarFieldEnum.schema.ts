import * as z from 'zod';

export const TagTranslateScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'languageId', 'translation', 'tagId', 'description'])

export type TagTranslateScalarFieldEnum = z.infer<typeof TagTranslateScalarFieldEnumSchema>;
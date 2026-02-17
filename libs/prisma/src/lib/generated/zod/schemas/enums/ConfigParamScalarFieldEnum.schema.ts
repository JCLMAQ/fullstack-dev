import * as z from 'zod';

export const ConfigParamScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'name', 'value', 'utility'])

export type ConfigParamScalarFieldEnum = z.infer<typeof ConfigParamScalarFieldEnumSchema>;
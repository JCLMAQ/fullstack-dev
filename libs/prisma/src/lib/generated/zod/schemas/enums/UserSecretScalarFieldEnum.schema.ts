import * as z from 'zod';

export const UserSecretScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'userId', 'pwdHash', 'salt', 'isAdmin'])

export type UserSecretScalarFieldEnum = z.infer<typeof UserSecretScalarFieldEnumSchema>;
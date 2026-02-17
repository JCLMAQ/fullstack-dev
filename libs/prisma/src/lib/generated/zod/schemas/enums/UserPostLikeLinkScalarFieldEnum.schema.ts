import * as z from 'zod';

export const UserPostLikeLinkScalarFieldEnumSchema = z.enum(['user_id', 'post_id', 'createdAt', 'updatedAt'])

export type UserPostLikeLinkScalarFieldEnum = z.infer<typeof UserPostLikeLinkScalarFieldEnumSchema>;
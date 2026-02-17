import * as z from 'zod';

export const UserFollowerLinkScalarFieldEnumSchema = z.enum(['user_id', 'follower_id', 'createdAt', 'updatedAt'])

export type UserFollowerLinkScalarFieldEnum = z.infer<typeof UserFollowerLinkScalarFieldEnumSchema>;
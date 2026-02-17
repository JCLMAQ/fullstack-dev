import * as z from 'zod';

export const RoleSchema = z.enum(['GUEST', 'USER', 'ADMIN', 'SUPERADMIN', 'REGULAR'])

export type Role = z.infer<typeof RoleSchema>;
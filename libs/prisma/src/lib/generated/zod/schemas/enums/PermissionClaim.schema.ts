import * as z from 'zod';

export const PermissionClaimSchema = z.enum(['CreateCoffee', 'UpdateCoffee', 'DeleteCoffee'])

export type PermissionClaim = z.infer<typeof PermissionClaimSchema>;
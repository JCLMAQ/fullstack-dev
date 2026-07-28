import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema'

const makeSchema = () => z.object({
  set: PermissionClaimSchema.array().optional(),
  push: z.union([PermissionClaimSchema, PermissionClaimSchema.array()]).optional()
}).strict();
export const UserUpdatePermissionsInputObjectSchema: z.ZodType<Prisma.UserUpdatePermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdatePermissionsInput>;
export const UserUpdatePermissionsInputObjectZodSchema = makeSchema();

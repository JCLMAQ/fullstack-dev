import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema'

const makeSchema = () => z.object({
  set: PermissionClaimSchema.array()
}).strict();
export const UserCreatePermissionsInputObjectSchema: z.ZodType<Prisma.UserCreatePermissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreatePermissionsInput>;
export const UserCreatePermissionsInputObjectZodSchema = makeSchema();

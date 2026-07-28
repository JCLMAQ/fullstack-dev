import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PermissionClaimSchema } from '../enums/PermissionClaim.schema'

const makeSchema = () => z.object({
  equals: PermissionClaimSchema.array().optional().nullable(),
  has: PermissionClaimSchema.optional().nullable(),
  hasEvery: PermissionClaimSchema.array().optional(),
  hasSome: PermissionClaimSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumPermissionClaimNullableListFilterObjectSchema: z.ZodType<Prisma.EnumPermissionClaimNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPermissionClaimNullableListFilter>;
export const EnumPermissionClaimNullableListFilterObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  set: RoleSchema.array().optional(),
  push: z.union([RoleSchema, RoleSchema.array()]).optional()
}).strict();
export const UserUpdateRolesInputObjectSchema: z.ZodType<Prisma.UserUpdateRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateRolesInput>;
export const UserUpdateRolesInputObjectZodSchema = makeSchema();

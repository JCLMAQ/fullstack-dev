import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  set: RoleSchema.array()
}).strict();
export const UserCreateRolesInputObjectSchema: z.ZodType<Prisma.UserCreateRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateRolesInput>;
export const UserCreateRolesInputObjectZodSchema = makeSchema();

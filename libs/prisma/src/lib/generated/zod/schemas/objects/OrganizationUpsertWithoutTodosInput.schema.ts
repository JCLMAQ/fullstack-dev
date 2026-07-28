import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationUpdateWithoutTodosInputObjectSchema as OrganizationUpdateWithoutTodosInputObjectSchema } from './OrganizationUpdateWithoutTodosInput.schema';
import { OrganizationUncheckedUpdateWithoutTodosInputObjectSchema as OrganizationUncheckedUpdateWithoutTodosInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTodosInput.schema';
import { OrganizationCreateWithoutTodosInputObjectSchema as OrganizationCreateWithoutTodosInputObjectSchema } from './OrganizationCreateWithoutTodosInput.schema';
import { OrganizationUncheckedCreateWithoutTodosInputObjectSchema as OrganizationUncheckedCreateWithoutTodosInputObjectSchema } from './OrganizationUncheckedCreateWithoutTodosInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTodosInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutTodosInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutTodosInput>;
export const OrganizationUpsertWithoutTodosInputObjectZodSchema = makeSchema();

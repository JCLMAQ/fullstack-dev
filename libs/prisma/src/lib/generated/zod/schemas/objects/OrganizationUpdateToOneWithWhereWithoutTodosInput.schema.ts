import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutTodosInputObjectSchema as OrganizationUpdateWithoutTodosInputObjectSchema } from './OrganizationUpdateWithoutTodosInput.schema';
import { OrganizationUncheckedUpdateWithoutTodosInputObjectSchema as OrganizationUncheckedUpdateWithoutTodosInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTodosInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutTodosInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutTodosInput>;
export const OrganizationUpdateToOneWithWhereWithoutTodosInputObjectZodSchema = makeSchema();

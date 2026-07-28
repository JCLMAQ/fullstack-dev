import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutTodosInputObjectSchema as OrganizationCreateWithoutTodosInputObjectSchema } from './OrganizationCreateWithoutTodosInput.schema';
import { OrganizationUncheckedCreateWithoutTodosInputObjectSchema as OrganizationUncheckedCreateWithoutTodosInputObjectSchema } from './OrganizationUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutTodosInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutTodosInput>;
export const OrganizationCreateOrConnectWithoutTodosInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationCreateWithoutTodosInputObjectSchema as OrganizationCreateWithoutTodosInputObjectSchema } from './OrganizationCreateWithoutTodosInput.schema';
import { OrganizationUncheckedCreateWithoutTodosInputObjectSchema as OrganizationUncheckedCreateWithoutTodosInputObjectSchema } from './OrganizationUncheckedCreateWithoutTodosInput.schema';
import { OrganizationCreateOrConnectWithoutTodosInputObjectSchema as OrganizationCreateOrConnectWithoutTodosInputObjectSchema } from './OrganizationCreateOrConnectWithoutTodosInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutTodosInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutTodosInput>;
export const OrganizationCreateNestedOneWithoutTodosInputObjectZodSchema = makeSchema();

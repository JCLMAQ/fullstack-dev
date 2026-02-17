import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutTodosInputObjectSchema as OrganizationCreateWithoutTodosInputObjectSchema } from './OrganizationCreateWithoutTodosInput.schema';
import { OrganizationUncheckedCreateWithoutTodosInputObjectSchema as OrganizationUncheckedCreateWithoutTodosInputObjectSchema } from './OrganizationUncheckedCreateWithoutTodosInput.schema';
import { OrganizationCreateOrConnectWithoutTodosInputObjectSchema as OrganizationCreateOrConnectWithoutTodosInputObjectSchema } from './OrganizationCreateOrConnectWithoutTodosInput.schema';
import { OrganizationUpsertWithoutTodosInputObjectSchema as OrganizationUpsertWithoutTodosInputObjectSchema } from './OrganizationUpsertWithoutTodosInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutTodosInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutTodosInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutTodosInput.schema';
import { OrganizationUpdateWithoutTodosInputObjectSchema as OrganizationUpdateWithoutTodosInputObjectSchema } from './OrganizationUpdateWithoutTodosInput.schema';
import { OrganizationUncheckedUpdateWithoutTodosInputObjectSchema as OrganizationUncheckedUpdateWithoutTodosInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutTodosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutTodosInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTodosInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutTodosNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutTodosNestedInput>;
export const OrganizationUpdateOneWithoutTodosNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutTasksInputObjectSchema as OrganizationCreateWithoutTasksInputObjectSchema } from './OrganizationCreateWithoutTasksInput.schema';
import { OrganizationUncheckedCreateWithoutTasksInputObjectSchema as OrganizationUncheckedCreateWithoutTasksInputObjectSchema } from './OrganizationUncheckedCreateWithoutTasksInput.schema';
import { OrganizationCreateOrConnectWithoutTasksInputObjectSchema as OrganizationCreateOrConnectWithoutTasksInputObjectSchema } from './OrganizationCreateOrConnectWithoutTasksInput.schema';
import { OrganizationUpsertWithoutTasksInputObjectSchema as OrganizationUpsertWithoutTasksInputObjectSchema } from './OrganizationUpsertWithoutTasksInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutTasksInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutTasksInput.schema';
import { OrganizationUpdateWithoutTasksInputObjectSchema as OrganizationUpdateWithoutTasksInputObjectSchema } from './OrganizationUpdateWithoutTasksInput.schema';
import { OrganizationUncheckedUpdateWithoutTasksInputObjectSchema as OrganizationUncheckedUpdateWithoutTasksInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutTasksNestedInput>;
export const OrganizationUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();

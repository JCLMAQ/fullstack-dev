import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationCreateWithoutTasksInputObjectSchema as OrganizationCreateWithoutTasksInputObjectSchema } from './OrganizationCreateWithoutTasksInput.schema';
import { OrganizationUncheckedCreateWithoutTasksInputObjectSchema as OrganizationUncheckedCreateWithoutTasksInputObjectSchema } from './OrganizationUncheckedCreateWithoutTasksInput.schema';
import { OrganizationCreateOrConnectWithoutTasksInputObjectSchema as OrganizationCreateOrConnectWithoutTasksInputObjectSchema } from './OrganizationCreateOrConnectWithoutTasksInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutTasksInput>;
export const OrganizationCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();

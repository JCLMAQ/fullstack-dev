import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutTasksInputObjectSchema as OrganizationCreateWithoutTasksInputObjectSchema } from './OrganizationCreateWithoutTasksInput.schema';
import { OrganizationUncheckedCreateWithoutTasksInputObjectSchema as OrganizationUncheckedCreateWithoutTasksInputObjectSchema } from './OrganizationUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutTasksInput>;
export const OrganizationCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();

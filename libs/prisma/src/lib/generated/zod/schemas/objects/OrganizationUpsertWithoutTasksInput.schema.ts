import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutTasksInputObjectSchema as OrganizationUpdateWithoutTasksInputObjectSchema } from './OrganizationUpdateWithoutTasksInput.schema';
import { OrganizationUncheckedUpdateWithoutTasksInputObjectSchema as OrganizationUncheckedUpdateWithoutTasksInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTasksInput.schema';
import { OrganizationCreateWithoutTasksInputObjectSchema as OrganizationCreateWithoutTasksInputObjectSchema } from './OrganizationCreateWithoutTasksInput.schema';
import { OrganizationUncheckedCreateWithoutTasksInputObjectSchema as OrganizationUncheckedCreateWithoutTasksInputObjectSchema } from './OrganizationUncheckedCreateWithoutTasksInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutTasksInput>;
export const OrganizationUpsertWithoutTasksInputObjectZodSchema = makeSchema();

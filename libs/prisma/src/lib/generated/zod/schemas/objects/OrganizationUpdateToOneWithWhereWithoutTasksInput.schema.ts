import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutTasksInputObjectSchema as OrganizationUpdateWithoutTasksInputObjectSchema } from './OrganizationUpdateWithoutTasksInput.schema';
import { OrganizationUncheckedUpdateWithoutTasksInputObjectSchema as OrganizationUncheckedUpdateWithoutTasksInputObjectSchema } from './OrganizationUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutTasksInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutTasksInput>;
export const OrganizationUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();

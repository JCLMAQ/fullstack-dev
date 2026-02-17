import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutPostsInputObjectSchema as OrganizationUpdateWithoutPostsInputObjectSchema } from './OrganizationUpdateWithoutPostsInput.schema';
import { OrganizationUncheckedUpdateWithoutPostsInputObjectSchema as OrganizationUncheckedUpdateWithoutPostsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPostsInput>;
export const OrganizationUpdateToOneWithWhereWithoutPostsInputObjectZodSchema = makeSchema();

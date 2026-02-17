import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { OrganizationUpdateWithoutPostsInputObjectSchema as OrganizationUpdateWithoutPostsInputObjectSchema } from './OrganizationUpdateWithoutPostsInput.schema';
import { OrganizationUncheckedUpdateWithoutPostsInputObjectSchema as OrganizationUncheckedUpdateWithoutPostsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPostsInput.schema';
import { OrganizationCreateWithoutPostsInputObjectSchema as OrganizationCreateWithoutPostsInputObjectSchema } from './OrganizationCreateWithoutPostsInput.schema';
import { OrganizationUncheckedCreateWithoutPostsInputObjectSchema as OrganizationUncheckedCreateWithoutPostsInputObjectSchema } from './OrganizationUncheckedCreateWithoutPostsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutPostsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPostsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutPostsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutPostsInput>;
export const OrganizationUpsertWithoutPostsInputObjectZodSchema = makeSchema();

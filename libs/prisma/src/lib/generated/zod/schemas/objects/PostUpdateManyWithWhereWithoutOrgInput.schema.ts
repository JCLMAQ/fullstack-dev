import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutOrgInputObjectSchema as PostUncheckedUpdateManyWithoutOrgInputObjectSchema } from './PostUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutOrgInput>;
export const PostUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutTagsInputObjectSchema as PostUncheckedUpdateManyWithoutTagsInputObjectSchema } from './PostUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutTagsInput>;
export const PostUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();

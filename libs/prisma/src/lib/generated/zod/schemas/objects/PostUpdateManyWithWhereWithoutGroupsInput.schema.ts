import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutGroupsInputObjectSchema as PostUncheckedUpdateManyWithoutGroupsInputObjectSchema } from './PostUncheckedUpdateManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutGroupsInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutGroupsInput>;
export const PostUpdateManyWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();

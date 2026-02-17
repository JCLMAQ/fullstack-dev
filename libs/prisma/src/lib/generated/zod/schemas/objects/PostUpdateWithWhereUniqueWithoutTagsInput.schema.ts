import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutTagsInputObjectSchema as PostUpdateWithoutTagsInputObjectSchema } from './PostUpdateWithoutTagsInput.schema';
import { PostUncheckedUpdateWithoutTagsInputObjectSchema as PostUncheckedUpdateWithoutTagsInputObjectSchema } from './PostUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutTagsInput>;
export const PostUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

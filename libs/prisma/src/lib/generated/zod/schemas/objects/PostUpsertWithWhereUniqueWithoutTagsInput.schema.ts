import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutTagsInputObjectSchema as PostUpdateWithoutTagsInputObjectSchema } from './PostUpdateWithoutTagsInput.schema';
import { PostUncheckedUpdateWithoutTagsInputObjectSchema as PostUncheckedUpdateWithoutTagsInputObjectSchema } from './PostUncheckedUpdateWithoutTagsInput.schema';
import { PostCreateWithoutTagsInputObjectSchema as PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema as PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutTagsInput>;
export const PostUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

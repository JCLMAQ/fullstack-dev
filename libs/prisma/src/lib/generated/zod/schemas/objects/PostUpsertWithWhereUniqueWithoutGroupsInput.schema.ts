import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutGroupsInputObjectSchema as PostUpdateWithoutGroupsInputObjectSchema } from './PostUpdateWithoutGroupsInput.schema';
import { PostUncheckedUpdateWithoutGroupsInputObjectSchema as PostUncheckedUpdateWithoutGroupsInputObjectSchema } from './PostUncheckedUpdateWithoutGroupsInput.schema';
import { PostCreateWithoutGroupsInputObjectSchema as PostCreateWithoutGroupsInputObjectSchema } from './PostCreateWithoutGroupsInput.schema';
import { PostUncheckedCreateWithoutGroupsInputObjectSchema as PostUncheckedCreateWithoutGroupsInputObjectSchema } from './PostUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutGroupsInput>;
export const PostUpsertWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

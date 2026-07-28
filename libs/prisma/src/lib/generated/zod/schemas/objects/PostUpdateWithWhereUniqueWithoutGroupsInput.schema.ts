import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutGroupsInputObjectSchema as PostUpdateWithoutGroupsInputObjectSchema } from './PostUpdateWithoutGroupsInput.schema';
import { PostUncheckedUpdateWithoutGroupsInputObjectSchema as PostUncheckedUpdateWithoutGroupsInputObjectSchema } from './PostUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutGroupsInput>;
export const PostUpdateWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

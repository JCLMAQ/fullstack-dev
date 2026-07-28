import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutCategoriesInputObjectSchema as PostCreateWithoutCategoriesInputObjectSchema } from './PostCreateWithoutCategoriesInput.schema';
import { PostUncheckedCreateWithoutCategoriesInputObjectSchema as PostUncheckedCreateWithoutCategoriesInputObjectSchema } from './PostUncheckedCreateWithoutCategoriesInput.schema';
import { PostCreateOrConnectWithoutCategoriesInputObjectSchema as PostCreateOrConnectWithoutCategoriesInputObjectSchema } from './PostCreateOrConnectWithoutCategoriesInput.schema';
import { PostUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema as PostUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutCategoriesInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema as PostUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutCategoriesInput.schema';
import { PostUpdateManyWithWhereWithoutCategoriesInputObjectSchema as PostUpdateManyWithWhereWithoutCategoriesInputObjectSchema } from './PostUpdateManyWithWhereWithoutCategoriesInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCategoriesInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCategoriesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutCategoriesInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutCategoriesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutCategoriesNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCategoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCategoriesNestedInput>;
export const PostUncheckedUpdateManyWithoutCategoriesNestedInputObjectZodSchema = makeSchema();

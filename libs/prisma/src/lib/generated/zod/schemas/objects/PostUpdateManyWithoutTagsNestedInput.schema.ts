import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutTagsInputObjectSchema as PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema as PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';
import { PostCreateOrConnectWithoutTagsInputObjectSchema as PostCreateOrConnectWithoutTagsInputObjectSchema } from './PostCreateOrConnectWithoutTagsInput.schema';
import { PostUpsertWithWhereUniqueWithoutTagsInputObjectSchema as PostUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutTagsInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutTagsInputObjectSchema as PostUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutTagsInput.schema';
import { PostUpdateManyWithWhereWithoutTagsInputObjectSchema as PostUpdateManyWithWhereWithoutTagsInputObjectSchema } from './PostUpdateManyWithWhereWithoutTagsInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutTagsInputObjectSchema), z.lazy(() => PostCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithoutTagsNestedInput>;
export const PostUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();

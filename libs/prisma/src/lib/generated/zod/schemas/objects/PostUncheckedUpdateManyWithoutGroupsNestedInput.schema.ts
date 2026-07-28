import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutGroupsInputObjectSchema as PostCreateWithoutGroupsInputObjectSchema } from './PostCreateWithoutGroupsInput.schema';
import { PostUncheckedCreateWithoutGroupsInputObjectSchema as PostUncheckedCreateWithoutGroupsInputObjectSchema } from './PostUncheckedCreateWithoutGroupsInput.schema';
import { PostCreateOrConnectWithoutGroupsInputObjectSchema as PostCreateOrConnectWithoutGroupsInputObjectSchema } from './PostCreateOrConnectWithoutGroupsInput.schema';
import { PostUpsertWithWhereUniqueWithoutGroupsInputObjectSchema as PostUpsertWithWhereUniqueWithoutGroupsInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutGroupsInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutGroupsInputObjectSchema as PostUpdateWithWhereUniqueWithoutGroupsInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutGroupsInput.schema';
import { PostUpdateManyWithWhereWithoutGroupsInputObjectSchema as PostUpdateManyWithWhereWithoutGroupsInputObjectSchema } from './PostUpdateManyWithWhereWithoutGroupsInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutGroupsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutGroupsNestedInput>;
export const PostUncheckedUpdateManyWithoutGroupsNestedInputObjectZodSchema = makeSchema();

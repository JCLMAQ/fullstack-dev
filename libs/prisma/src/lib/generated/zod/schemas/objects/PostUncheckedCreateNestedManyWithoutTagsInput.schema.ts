import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutTagsInputObjectSchema as PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema as PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema';
import { PostCreateOrConnectWithoutTagsInputObjectSchema as PostCreateOrConnectWithoutTagsInputObjectSchema } from './PostCreateOrConnectWithoutTagsInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutTagsInputObjectSchema), z.lazy(() => PostCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutTagsInput>;
export const PostUncheckedCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();

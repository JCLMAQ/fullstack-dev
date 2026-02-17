import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutTagsInputObjectSchema as PostCreateWithoutTagsInputObjectSchema } from './PostCreateWithoutTagsInput.schema';
import { PostUncheckedCreateWithoutTagsInputObjectSchema as PostUncheckedCreateWithoutTagsInputObjectSchema } from './PostUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutTagsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutTagsInput>;
export const PostCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();

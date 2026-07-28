import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutLikedBysInputObjectSchema as PostCreateWithoutLikedBysInputObjectSchema } from './PostCreateWithoutLikedBysInput.schema';
import { PostUncheckedCreateWithoutLikedBysInputObjectSchema as PostUncheckedCreateWithoutLikedBysInputObjectSchema } from './PostUncheckedCreateWithoutLikedBysInput.schema';
import { PostCreateOrConnectWithoutLikedBysInputObjectSchema as PostCreateOrConnectWithoutLikedBysInputObjectSchema } from './PostCreateOrConnectWithoutLikedBysInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikedBysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutLikedBysInputObjectSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional()
}).strict();
export const PostCreateNestedOneWithoutLikedBysInputObjectSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutLikedBysInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedOneWithoutLikedBysInput>;
export const PostCreateNestedOneWithoutLikedBysInputObjectZodSchema = makeSchema();

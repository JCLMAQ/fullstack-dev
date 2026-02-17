import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutLikedBysInputObjectSchema as PostCreateWithoutLikedBysInputObjectSchema } from './PostCreateWithoutLikedBysInput.schema';
import { PostUncheckedCreateWithoutLikedBysInputObjectSchema as PostUncheckedCreateWithoutLikedBysInputObjectSchema } from './PostUncheckedCreateWithoutLikedBysInput.schema';
import { PostCreateOrConnectWithoutLikedBysInputObjectSchema as PostCreateOrConnectWithoutLikedBysInputObjectSchema } from './PostCreateOrConnectWithoutLikedBysInput.schema';
import { PostUpsertWithoutLikedBysInputObjectSchema as PostUpsertWithoutLikedBysInputObjectSchema } from './PostUpsertWithoutLikedBysInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateToOneWithWhereWithoutLikedBysInputObjectSchema as PostUpdateToOneWithWhereWithoutLikedBysInputObjectSchema } from './PostUpdateToOneWithWhereWithoutLikedBysInput.schema';
import { PostUpdateWithoutLikedBysInputObjectSchema as PostUpdateWithoutLikedBysInputObjectSchema } from './PostUpdateWithoutLikedBysInput.schema';
import { PostUncheckedUpdateWithoutLikedBysInputObjectSchema as PostUncheckedUpdateWithoutLikedBysInputObjectSchema } from './PostUncheckedUpdateWithoutLikedBysInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikedBysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutLikedBysInputObjectSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutLikedBysInputObjectSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PostUpdateToOneWithWhereWithoutLikedBysInputObjectSchema), z.lazy(() => PostUpdateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikedBysInputObjectSchema)]).optional()
}).strict();
export const PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikedBysNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikedBysNestedInput>;
export const PostUpdateOneRequiredWithoutLikedBysNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostUpdateWithoutImagesInputObjectSchema as PostUpdateWithoutImagesInputObjectSchema } from './PostUpdateWithoutImagesInput.schema';
import { PostUncheckedUpdateWithoutImagesInputObjectSchema as PostUncheckedUpdateWithoutImagesInputObjectSchema } from './PostUncheckedUpdateWithoutImagesInput.schema';
import { PostCreateWithoutImagesInputObjectSchema as PostCreateWithoutImagesInputObjectSchema } from './PostCreateWithoutImagesInput.schema';
import { PostUncheckedCreateWithoutImagesInputObjectSchema as PostUncheckedCreateWithoutImagesInputObjectSchema } from './PostUncheckedCreateWithoutImagesInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PostUpdateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutImagesInputObjectSchema)]),
  where: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const PostUpsertWithoutImagesInputObjectSchema: z.ZodType<Prisma.PostUpsertWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithoutImagesInput>;
export const PostUpsertWithoutImagesInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { PostUpdateWithoutImagesInputObjectSchema as PostUpdateWithoutImagesInputObjectSchema } from './PostUpdateWithoutImagesInput.schema';
import { PostUncheckedUpdateWithoutImagesInputObjectSchema as PostUncheckedUpdateWithoutImagesInputObjectSchema } from './PostUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PostUpdateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const PostUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutImagesInput>;
export const PostUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();

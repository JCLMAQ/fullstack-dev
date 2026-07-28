import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutImagesInputObjectSchema as PostCreateWithoutImagesInputObjectSchema } from './PostCreateWithoutImagesInput.schema';
import { PostUncheckedCreateWithoutImagesInputObjectSchema as PostUncheckedCreateWithoutImagesInputObjectSchema } from './PostUncheckedCreateWithoutImagesInput.schema';
import { PostCreateOrConnectWithoutImagesInputObjectSchema as PostCreateOrConnectWithoutImagesInputObjectSchema } from './PostCreateOrConnectWithoutImagesInput.schema';
import { PostUpsertWithoutImagesInputObjectSchema as PostUpsertWithoutImagesInputObjectSchema } from './PostUpsertWithoutImagesInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateToOneWithWhereWithoutImagesInputObjectSchema as PostUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './PostUpdateToOneWithWhereWithoutImagesInput.schema';
import { PostUpdateWithoutImagesInputObjectSchema as PostUpdateWithoutImagesInputObjectSchema } from './PostUpdateWithoutImagesInput.schema';
import { PostUncheckedUpdateWithoutImagesInputObjectSchema as PostUncheckedUpdateWithoutImagesInputObjectSchema } from './PostUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutImagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PostWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PostWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PostUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => PostUpdateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const PostUpdateOneWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateOneWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateOneWithoutImagesNestedInput>;
export const PostUpdateOneWithoutImagesNestedInputObjectZodSchema = makeSchema();

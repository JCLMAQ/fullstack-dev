import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutImagesInputObjectSchema as PostCreateWithoutImagesInputObjectSchema } from './PostCreateWithoutImagesInput.schema';
import { PostUncheckedCreateWithoutImagesInputObjectSchema as PostUncheckedCreateWithoutImagesInputObjectSchema } from './PostUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutImagesInput>;
export const PostCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();

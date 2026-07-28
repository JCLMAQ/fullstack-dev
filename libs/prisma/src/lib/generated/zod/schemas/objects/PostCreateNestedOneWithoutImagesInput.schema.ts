import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutImagesInputObjectSchema as PostCreateWithoutImagesInputObjectSchema } from './PostCreateWithoutImagesInput.schema';
import { PostUncheckedCreateWithoutImagesInputObjectSchema as PostUncheckedCreateWithoutImagesInputObjectSchema } from './PostUncheckedCreateWithoutImagesInput.schema';
import { PostCreateOrConnectWithoutImagesInputObjectSchema as PostCreateOrConnectWithoutImagesInputObjectSchema } from './PostCreateOrConnectWithoutImagesInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutImagesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional()
}).strict();
export const PostCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedOneWithoutImagesInput>;
export const PostCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();

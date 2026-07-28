import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutStoryInputObjectSchema as ImageCreateWithoutStoryInputObjectSchema } from './ImageCreateWithoutStoryInput.schema';
import { ImageUncheckedCreateWithoutStoryInputObjectSchema as ImageUncheckedCreateWithoutStoryInputObjectSchema } from './ImageUncheckedCreateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutStoryInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutStoryInput>;
export const ImageCreateOrConnectWithoutStoryInputObjectZodSchema = makeSchema();

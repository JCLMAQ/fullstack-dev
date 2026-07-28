import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutStoryInputObjectSchema as ImageUpdateWithoutStoryInputObjectSchema } from './ImageUpdateWithoutStoryInput.schema';
import { ImageUncheckedUpdateWithoutStoryInputObjectSchema as ImageUncheckedUpdateWithoutStoryInputObjectSchema } from './ImageUncheckedUpdateWithoutStoryInput.schema';
import { ImageCreateWithoutStoryInputObjectSchema as ImageCreateWithoutStoryInputObjectSchema } from './ImageCreateWithoutStoryInput.schema';
import { ImageUncheckedCreateWithoutStoryInputObjectSchema as ImageUncheckedCreateWithoutStoryInputObjectSchema } from './ImageUncheckedCreateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutStoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutStoryInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutStoryInput>;
export const ImageUpsertWithWhereUniqueWithoutStoryInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutStoryInputObjectSchema as ImageUpdateWithoutStoryInputObjectSchema } from './ImageUpdateWithoutStoryInput.schema';
import { ImageUncheckedUpdateWithoutStoryInputObjectSchema as ImageUncheckedUpdateWithoutStoryInputObjectSchema } from './ImageUncheckedUpdateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutStoryInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutStoryInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutStoryInput>;
export const ImageUpdateWithWhereUniqueWithoutStoryInputObjectZodSchema = makeSchema();

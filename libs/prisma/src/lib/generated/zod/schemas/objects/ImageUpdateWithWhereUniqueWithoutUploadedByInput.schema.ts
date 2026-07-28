import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutUploadedByInputObjectSchema as ImageUpdateWithoutUploadedByInputObjectSchema } from './ImageUpdateWithoutUploadedByInput.schema';
import { ImageUncheckedUpdateWithoutUploadedByInputObjectSchema as ImageUncheckedUpdateWithoutUploadedByInputObjectSchema } from './ImageUncheckedUpdateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutUploadedByInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutUploadedByInput>;
export const ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutUploadedByInputObjectSchema as ImageUpdateWithoutUploadedByInputObjectSchema } from './ImageUpdateWithoutUploadedByInput.schema';
import { ImageUncheckedUpdateWithoutUploadedByInputObjectSchema as ImageUncheckedUpdateWithoutUploadedByInputObjectSchema } from './ImageUncheckedUpdateWithoutUploadedByInput.schema';
import { ImageCreateWithoutUploadedByInputObjectSchema as ImageCreateWithoutUploadedByInputObjectSchema } from './ImageCreateWithoutUploadedByInput.schema';
import { ImageUncheckedCreateWithoutUploadedByInputObjectSchema as ImageUncheckedCreateWithoutUploadedByInputObjectSchema } from './ImageUncheckedCreateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutUploadedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutUploadedByInput>;
export const ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectZodSchema = makeSchema();

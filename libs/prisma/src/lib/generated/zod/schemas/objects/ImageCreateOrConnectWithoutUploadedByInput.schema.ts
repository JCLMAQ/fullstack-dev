import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutUploadedByInputObjectSchema as ImageCreateWithoutUploadedByInputObjectSchema } from './ImageCreateWithoutUploadedByInput.schema';
import { ImageUncheckedCreateWithoutUploadedByInputObjectSchema as ImageUncheckedCreateWithoutUploadedByInputObjectSchema } from './ImageUncheckedCreateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutUploadedByInput>;
export const ImageCreateOrConnectWithoutUploadedByInputObjectZodSchema = makeSchema();

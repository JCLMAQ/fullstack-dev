import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateWithoutUploadedByInputObjectSchema as ImageCreateWithoutUploadedByInputObjectSchema } from './ImageCreateWithoutUploadedByInput.schema';
import { ImageUncheckedCreateWithoutUploadedByInputObjectSchema as ImageUncheckedCreateWithoutUploadedByInputObjectSchema } from './ImageUncheckedCreateWithoutUploadedByInput.schema';
import { ImageCreateOrConnectWithoutUploadedByInputObjectSchema as ImageCreateOrConnectWithoutUploadedByInputObjectSchema } from './ImageCreateOrConnectWithoutUploadedByInput.schema';
import { ImageCreateManyUploadedByInputEnvelopeObjectSchema as ImageCreateManyUploadedByInputEnvelopeObjectSchema } from './ImageCreateManyUploadedByInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutUploadedByInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutUploadedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyUploadedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutUploadedByInput>;
export const ImageUncheckedCreateNestedManyWithoutUploadedByInputObjectZodSchema = makeSchema();

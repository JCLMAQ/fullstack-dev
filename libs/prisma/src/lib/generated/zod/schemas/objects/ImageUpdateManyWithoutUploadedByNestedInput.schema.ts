import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutUploadedByInputObjectSchema as ImageCreateWithoutUploadedByInputObjectSchema } from './ImageCreateWithoutUploadedByInput.schema';
import { ImageUncheckedCreateWithoutUploadedByInputObjectSchema as ImageUncheckedCreateWithoutUploadedByInputObjectSchema } from './ImageUncheckedCreateWithoutUploadedByInput.schema';
import { ImageCreateOrConnectWithoutUploadedByInputObjectSchema as ImageCreateOrConnectWithoutUploadedByInputObjectSchema } from './ImageCreateOrConnectWithoutUploadedByInput.schema';
import { ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema as ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutUploadedByInput.schema';
import { ImageCreateManyUploadedByInputEnvelopeObjectSchema as ImageCreateManyUploadedByInputEnvelopeObjectSchema } from './ImageCreateManyUploadedByInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema as ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutUploadedByInput.schema';
import { ImageUpdateManyWithWhereWithoutUploadedByInputObjectSchema as ImageUpdateManyWithWhereWithoutUploadedByInputObjectSchema } from './ImageUpdateManyWithWhereWithoutUploadedByInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageCreateWithoutUploadedByInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUploadedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutUploadedByInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutUploadedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyUploadedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutUploadedByInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutUploadedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUpdateManyWithoutUploadedByNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithoutUploadedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithoutUploadedByNestedInput>;
export const ImageUpdateManyWithoutUploadedByNestedInputObjectZodSchema = makeSchema();

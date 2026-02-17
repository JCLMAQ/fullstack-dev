import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutPostInputObjectSchema as ImageCreateWithoutPostInputObjectSchema } from './ImageCreateWithoutPostInput.schema';
import { ImageUncheckedCreateWithoutPostInputObjectSchema as ImageUncheckedCreateWithoutPostInputObjectSchema } from './ImageUncheckedCreateWithoutPostInput.schema';
import { ImageCreateOrConnectWithoutPostInputObjectSchema as ImageCreateOrConnectWithoutPostInputObjectSchema } from './ImageCreateOrConnectWithoutPostInput.schema';
import { ImageUpsertWithWhereUniqueWithoutPostInputObjectSchema as ImageUpsertWithWhereUniqueWithoutPostInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutPostInput.schema';
import { ImageCreateManyPostInputEnvelopeObjectSchema as ImageCreateManyPostInputEnvelopeObjectSchema } from './ImageCreateManyPostInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutPostInputObjectSchema as ImageUpdateWithWhereUniqueWithoutPostInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutPostInput.schema';
import { ImageUpdateManyWithWhereWithoutPostInputObjectSchema as ImageUpdateManyWithWhereWithoutPostInputObjectSchema } from './ImageUpdateManyWithWhereWithoutPostInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutPostInputObjectSchema), z.lazy(() => ImageCreateWithoutPostInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyPostInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutPostInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutPostInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUpdateManyWithoutPostNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithoutPostNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithoutPostNestedInput>;
export const ImageUpdateManyWithoutPostNestedInputObjectZodSchema = makeSchema();

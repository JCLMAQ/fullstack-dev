import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutStoryInputObjectSchema as ImageCreateWithoutStoryInputObjectSchema } from './ImageCreateWithoutStoryInput.schema';
import { ImageUncheckedCreateWithoutStoryInputObjectSchema as ImageUncheckedCreateWithoutStoryInputObjectSchema } from './ImageUncheckedCreateWithoutStoryInput.schema';
import { ImageCreateOrConnectWithoutStoryInputObjectSchema as ImageCreateOrConnectWithoutStoryInputObjectSchema } from './ImageCreateOrConnectWithoutStoryInput.schema';
import { ImageUpsertWithWhereUniqueWithoutStoryInputObjectSchema as ImageUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutStoryInput.schema';
import { ImageCreateManyStoryInputEnvelopeObjectSchema as ImageCreateManyStoryInputEnvelopeObjectSchema } from './ImageCreateManyStoryInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutStoryInputObjectSchema as ImageUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutStoryInput.schema';
import { ImageUpdateManyWithWhereWithoutStoryInputObjectSchema as ImageUpdateManyWithWhereWithoutStoryInputObjectSchema } from './ImageUpdateManyWithWhereWithoutStoryInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageCreateWithoutStoryInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutStoryInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutStoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutStoryInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutStoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyStoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutStoryInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutStoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutStoryInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutStoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUncheckedUpdateManyWithoutStoryNestedInputObjectSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutStoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutStoryNestedInput>;
export const ImageUncheckedUpdateManyWithoutStoryNestedInputObjectZodSchema = makeSchema();

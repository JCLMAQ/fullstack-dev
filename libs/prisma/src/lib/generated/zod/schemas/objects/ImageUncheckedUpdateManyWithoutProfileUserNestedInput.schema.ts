import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutProfileUserInputObjectSchema as ImageCreateWithoutProfileUserInputObjectSchema } from './ImageCreateWithoutProfileUserInput.schema';
import { ImageUncheckedCreateWithoutProfileUserInputObjectSchema as ImageUncheckedCreateWithoutProfileUserInputObjectSchema } from './ImageUncheckedCreateWithoutProfileUserInput.schema';
import { ImageCreateOrConnectWithoutProfileUserInputObjectSchema as ImageCreateOrConnectWithoutProfileUserInputObjectSchema } from './ImageCreateOrConnectWithoutProfileUserInput.schema';
import { ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema as ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutProfileUserInput.schema';
import { ImageCreateManyProfileUserInputEnvelopeObjectSchema as ImageCreateManyProfileUserInputEnvelopeObjectSchema } from './ImageCreateManyProfileUserInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema as ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutProfileUserInput.schema';
import { ImageUpdateManyWithWhereWithoutProfileUserInputObjectSchema as ImageUpdateManyWithWhereWithoutProfileUserInputObjectSchema } from './ImageUpdateManyWithWhereWithoutProfileUserInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutProfileUserInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutProfileUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyProfileUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutProfileUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUncheckedUpdateManyWithoutProfileUserNestedInputObjectSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProfileUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutProfileUserNestedInput>;
export const ImageUncheckedUpdateManyWithoutProfileUserNestedInputObjectZodSchema = makeSchema();

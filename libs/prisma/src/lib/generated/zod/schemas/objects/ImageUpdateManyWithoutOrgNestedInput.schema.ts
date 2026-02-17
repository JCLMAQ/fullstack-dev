import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutOrgInputObjectSchema as ImageCreateWithoutOrgInputObjectSchema } from './ImageCreateWithoutOrgInput.schema';
import { ImageUncheckedCreateWithoutOrgInputObjectSchema as ImageUncheckedCreateWithoutOrgInputObjectSchema } from './ImageUncheckedCreateWithoutOrgInput.schema';
import { ImageCreateOrConnectWithoutOrgInputObjectSchema as ImageCreateOrConnectWithoutOrgInputObjectSchema } from './ImageCreateOrConnectWithoutOrgInput.schema';
import { ImageUpsertWithWhereUniqueWithoutOrgInputObjectSchema as ImageUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutOrgInput.schema';
import { ImageCreateManyOrgInputEnvelopeObjectSchema as ImageCreateManyOrgInputEnvelopeObjectSchema } from './ImageCreateManyOrgInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutOrgInputObjectSchema as ImageUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutOrgInput.schema';
import { ImageUpdateManyWithWhereWithoutOrgInputObjectSchema as ImageUpdateManyWithWhereWithoutOrgInputObjectSchema } from './ImageUpdateManyWithWhereWithoutOrgInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithoutOrgNestedInput>;
export const ImageUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();

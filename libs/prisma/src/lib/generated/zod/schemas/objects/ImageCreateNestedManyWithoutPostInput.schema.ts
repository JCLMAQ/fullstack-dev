import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutPostInputObjectSchema as ImageCreateWithoutPostInputObjectSchema } from './ImageCreateWithoutPostInput.schema';
import { ImageUncheckedCreateWithoutPostInputObjectSchema as ImageUncheckedCreateWithoutPostInputObjectSchema } from './ImageUncheckedCreateWithoutPostInput.schema';
import { ImageCreateOrConnectWithoutPostInputObjectSchema as ImageCreateOrConnectWithoutPostInputObjectSchema } from './ImageCreateOrConnectWithoutPostInput.schema';
import { ImageCreateManyPostInputEnvelopeObjectSchema as ImageCreateManyPostInputEnvelopeObjectSchema } from './ImageCreateManyPostInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutPostInputObjectSchema), z.lazy(() => ImageCreateWithoutPostInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyPostInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageCreateNestedManyWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedManyWithoutPostInput>;
export const ImageCreateNestedManyWithoutPostInputObjectZodSchema = makeSchema();

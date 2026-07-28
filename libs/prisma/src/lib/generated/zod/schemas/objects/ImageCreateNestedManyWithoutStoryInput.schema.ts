import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateWithoutStoryInputObjectSchema as ImageCreateWithoutStoryInputObjectSchema } from './ImageCreateWithoutStoryInput.schema';
import { ImageUncheckedCreateWithoutStoryInputObjectSchema as ImageUncheckedCreateWithoutStoryInputObjectSchema } from './ImageUncheckedCreateWithoutStoryInput.schema';
import { ImageCreateOrConnectWithoutStoryInputObjectSchema as ImageCreateOrConnectWithoutStoryInputObjectSchema } from './ImageCreateOrConnectWithoutStoryInput.schema';
import { ImageCreateManyStoryInputEnvelopeObjectSchema as ImageCreateManyStoryInputEnvelopeObjectSchema } from './ImageCreateManyStoryInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageCreateWithoutStoryInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutStoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutStoryInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutStoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyStoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageCreateNestedManyWithoutStoryInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedManyWithoutStoryInput>;
export const ImageCreateNestedManyWithoutStoryInputObjectZodSchema = makeSchema();

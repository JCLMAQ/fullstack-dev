import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateWithoutProfileUserInputObjectSchema as ImageCreateWithoutProfileUserInputObjectSchema } from './ImageCreateWithoutProfileUserInput.schema';
import { ImageUncheckedCreateWithoutProfileUserInputObjectSchema as ImageUncheckedCreateWithoutProfileUserInputObjectSchema } from './ImageUncheckedCreateWithoutProfileUserInput.schema';
import { ImageCreateOrConnectWithoutProfileUserInputObjectSchema as ImageCreateOrConnectWithoutProfileUserInputObjectSchema } from './ImageCreateOrConnectWithoutProfileUserInput.schema';
import { ImageCreateManyProfileUserInputEnvelopeObjectSchema as ImageCreateManyProfileUserInputEnvelopeObjectSchema } from './ImageCreateManyProfileUserInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutProfileUserInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutProfileUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyProfileUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageCreateNestedManyWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedManyWithoutProfileUserInput>;
export const ImageCreateNestedManyWithoutProfileUserInputObjectZodSchema = makeSchema();

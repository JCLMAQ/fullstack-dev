import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateWithoutOrgInputObjectSchema as ImageCreateWithoutOrgInputObjectSchema } from './ImageCreateWithoutOrgInput.schema';
import { ImageUncheckedCreateWithoutOrgInputObjectSchema as ImageUncheckedCreateWithoutOrgInputObjectSchema } from './ImageUncheckedCreateWithoutOrgInput.schema';
import { ImageCreateOrConnectWithoutOrgInputObjectSchema as ImageCreateOrConnectWithoutOrgInputObjectSchema } from './ImageCreateOrConnectWithoutOrgInput.schema';
import { ImageCreateManyOrgInputEnvelopeObjectSchema as ImageCreateManyOrgInputEnvelopeObjectSchema } from './ImageCreateManyOrgInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageUncheckedCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutOrgInput>;
export const ImageUncheckedCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();

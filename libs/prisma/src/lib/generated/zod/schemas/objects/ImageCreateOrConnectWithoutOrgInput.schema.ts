import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutOrgInputObjectSchema as ImageCreateWithoutOrgInputObjectSchema } from './ImageCreateWithoutOrgInput.schema';
import { ImageUncheckedCreateWithoutOrgInputObjectSchema as ImageUncheckedCreateWithoutOrgInputObjectSchema } from './ImageUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutOrgInput>;
export const ImageCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();

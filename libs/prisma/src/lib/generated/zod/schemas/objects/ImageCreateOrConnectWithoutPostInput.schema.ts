import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutPostInputObjectSchema as ImageCreateWithoutPostInputObjectSchema } from './ImageCreateWithoutPostInput.schema';
import { ImageUncheckedCreateWithoutPostInputObjectSchema as ImageUncheckedCreateWithoutPostInputObjectSchema } from './ImageUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutPostInput>;
export const ImageCreateOrConnectWithoutPostInputObjectZodSchema = makeSchema();

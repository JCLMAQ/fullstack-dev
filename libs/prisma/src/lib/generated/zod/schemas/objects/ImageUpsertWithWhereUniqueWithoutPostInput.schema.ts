import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutPostInputObjectSchema as ImageUpdateWithoutPostInputObjectSchema } from './ImageUpdateWithoutPostInput.schema';
import { ImageUncheckedUpdateWithoutPostInputObjectSchema as ImageUncheckedUpdateWithoutPostInputObjectSchema } from './ImageUncheckedUpdateWithoutPostInput.schema';
import { ImageCreateWithoutPostInputObjectSchema as ImageCreateWithoutPostInputObjectSchema } from './ImageCreateWithoutPostInput.schema';
import { ImageUncheckedCreateWithoutPostInputObjectSchema as ImageUncheckedCreateWithoutPostInputObjectSchema } from './ImageUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutPostInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutPostInput>;
export const ImageUpsertWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();

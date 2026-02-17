import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutPostInputObjectSchema as ImageUpdateWithoutPostInputObjectSchema } from './ImageUpdateWithoutPostInput.schema';
import { ImageUncheckedUpdateWithoutPostInputObjectSchema as ImageUncheckedUpdateWithoutPostInputObjectSchema } from './ImageUncheckedUpdateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutPostInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutPostInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutPostInput>;
export const ImageUpdateWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();

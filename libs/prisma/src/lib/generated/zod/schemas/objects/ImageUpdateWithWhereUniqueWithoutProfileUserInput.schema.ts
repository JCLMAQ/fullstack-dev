import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutProfileUserInputObjectSchema as ImageUpdateWithoutProfileUserInputObjectSchema } from './ImageUpdateWithoutProfileUserInput.schema';
import { ImageUncheckedUpdateWithoutProfileUserInputObjectSchema as ImageUncheckedUpdateWithoutProfileUserInputObjectSchema } from './ImageUncheckedUpdateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfileUserInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutProfileUserInput>;
export const ImageUpdateWithWhereUniqueWithoutProfileUserInputObjectZodSchema = makeSchema();

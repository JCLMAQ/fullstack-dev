import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutProfileUserInputObjectSchema as ImageUpdateWithoutProfileUserInputObjectSchema } from './ImageUpdateWithoutProfileUserInput.schema';
import { ImageUncheckedUpdateWithoutProfileUserInputObjectSchema as ImageUncheckedUpdateWithoutProfileUserInputObjectSchema } from './ImageUncheckedUpdateWithoutProfileUserInput.schema';
import { ImageCreateWithoutProfileUserInputObjectSchema as ImageCreateWithoutProfileUserInputObjectSchema } from './ImageCreateWithoutProfileUserInput.schema';
import { ImageUncheckedCreateWithoutProfileUserInputObjectSchema as ImageUncheckedCreateWithoutProfileUserInputObjectSchema } from './ImageUncheckedCreateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfileUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutProfileUserInput>;
export const ImageUpsertWithWhereUniqueWithoutProfileUserInputObjectZodSchema = makeSchema();

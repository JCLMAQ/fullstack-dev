import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutProfileUserInputObjectSchema as ImageCreateWithoutProfileUserInputObjectSchema } from './ImageCreateWithoutProfileUserInput.schema';
import { ImageUncheckedCreateWithoutProfileUserInputObjectSchema as ImageUncheckedCreateWithoutProfileUserInputObjectSchema } from './ImageUncheckedCreateWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutProfileUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfileUserInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutProfileUserInput>;
export const ImageCreateOrConnectWithoutProfileUserInputObjectZodSchema = makeSchema();

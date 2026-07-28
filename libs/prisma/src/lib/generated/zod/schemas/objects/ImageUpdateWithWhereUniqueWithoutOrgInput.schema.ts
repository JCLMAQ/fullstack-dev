import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutOrgInputObjectSchema as ImageUpdateWithoutOrgInputObjectSchema } from './ImageUpdateWithoutOrgInput.schema';
import { ImageUncheckedUpdateWithoutOrgInputObjectSchema as ImageUncheckedUpdateWithoutOrgInputObjectSchema } from './ImageUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutOrgInput>;
export const ImageUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

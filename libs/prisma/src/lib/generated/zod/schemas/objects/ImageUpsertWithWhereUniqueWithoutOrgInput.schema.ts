import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutOrgInputObjectSchema as ImageUpdateWithoutOrgInputObjectSchema } from './ImageUpdateWithoutOrgInput.schema';
import { ImageUncheckedUpdateWithoutOrgInputObjectSchema as ImageUncheckedUpdateWithoutOrgInputObjectSchema } from './ImageUncheckedUpdateWithoutOrgInput.schema';
import { ImageCreateWithoutOrgInputObjectSchema as ImageCreateWithoutOrgInputObjectSchema } from './ImageCreateWithoutOrgInput.schema';
import { ImageUncheckedCreateWithoutOrgInputObjectSchema as ImageUncheckedCreateWithoutOrgInputObjectSchema } from './ImageUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutOrgInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutOrgInput>;
export const ImageUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutOrgInputObjectSchema as ImageUncheckedUpdateManyWithoutOrgInputObjectSchema } from './ImageUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutOrgInput>;
export const ImageUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();

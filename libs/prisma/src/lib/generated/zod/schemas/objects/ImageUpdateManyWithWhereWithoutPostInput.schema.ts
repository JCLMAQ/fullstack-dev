import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutPostInputObjectSchema as ImageUncheckedUpdateManyWithoutPostInputObjectSchema } from './ImageUncheckedUpdateManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutPostInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutPostInput>;
export const ImageUpdateManyWithWhereWithoutPostInputObjectZodSchema = makeSchema();

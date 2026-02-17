import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutUploadedByInputObjectSchema as ImageUncheckedUpdateManyWithoutUploadedByInputObjectSchema } from './ImageUncheckedUpdateManyWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutUploadedByInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutUploadedByInput>;
export const ImageUpdateManyWithWhereWithoutUploadedByInputObjectZodSchema = makeSchema();

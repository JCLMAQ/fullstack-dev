import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutStoryInputObjectSchema as ImageUncheckedUpdateManyWithoutStoryInputObjectSchema } from './ImageUncheckedUpdateManyWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutStoryInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutStoryInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutStoryInput>;
export const ImageUpdateManyWithWhereWithoutStoryInputObjectZodSchema = makeSchema();

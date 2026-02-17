import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutProfileUserInputObjectSchema as ImageUncheckedUpdateManyWithoutProfileUserInputObjectSchema } from './ImageUncheckedUpdateManyWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutProfileUserInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutProfileUserInput>;
export const ImageUpdateManyWithWhereWithoutProfileUserInputObjectZodSchema = makeSchema();

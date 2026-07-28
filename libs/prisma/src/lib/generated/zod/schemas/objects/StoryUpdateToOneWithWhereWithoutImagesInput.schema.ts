import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema';
import { StoryUpdateWithoutImagesInputObjectSchema as StoryUpdateWithoutImagesInputObjectSchema } from './StoryUpdateWithoutImagesInput.schema';
import { StoryUncheckedUpdateWithoutImagesInputObjectSchema as StoryUncheckedUpdateWithoutImagesInputObjectSchema } from './StoryUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoryUpdateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutImagesInputObjectSchema)])
}).strict();
export const StoryUpdateToOneWithWhereWithoutImagesInputObjectSchema: z.ZodType<Prisma.StoryUpdateToOneWithWhereWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateToOneWithWhereWithoutImagesInput>;
export const StoryUpdateToOneWithWhereWithoutImagesInputObjectZodSchema = makeSchema();

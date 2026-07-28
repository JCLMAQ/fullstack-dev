import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryUpdateWithoutImagesInputObjectSchema as StoryUpdateWithoutImagesInputObjectSchema } from './StoryUpdateWithoutImagesInput.schema';
import { StoryUncheckedUpdateWithoutImagesInputObjectSchema as StoryUncheckedUpdateWithoutImagesInputObjectSchema } from './StoryUncheckedUpdateWithoutImagesInput.schema';
import { StoryCreateWithoutImagesInputObjectSchema as StoryCreateWithoutImagesInputObjectSchema } from './StoryCreateWithoutImagesInput.schema';
import { StoryUncheckedCreateWithoutImagesInputObjectSchema as StoryUncheckedCreateWithoutImagesInputObjectSchema } from './StoryUncheckedCreateWithoutImagesInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoryUpdateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => StoryCreateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutImagesInputObjectSchema)]),
  where: z.lazy(() => StoryWhereInputObjectSchema).optional()
}).strict();
export const StoryUpsertWithoutImagesInputObjectSchema: z.ZodType<Prisma.StoryUpsertWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpsertWithoutImagesInput>;
export const StoryUpsertWithoutImagesInputObjectZodSchema = makeSchema();

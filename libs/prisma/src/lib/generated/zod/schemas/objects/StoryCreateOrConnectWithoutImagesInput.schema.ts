import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutImagesInputObjectSchema as StoryCreateWithoutImagesInputObjectSchema } from './StoryCreateWithoutImagesInput.schema';
import { StoryUncheckedCreateWithoutImagesInputObjectSchema as StoryUncheckedCreateWithoutImagesInputObjectSchema } from './StoryUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoryCreateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const StoryCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateOrConnectWithoutImagesInput>;
export const StoryCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();

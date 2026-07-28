import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryCreateWithoutImagesInputObjectSchema as StoryCreateWithoutImagesInputObjectSchema } from './StoryCreateWithoutImagesInput.schema';
import { StoryUncheckedCreateWithoutImagesInputObjectSchema as StoryUncheckedCreateWithoutImagesInputObjectSchema } from './StoryUncheckedCreateWithoutImagesInput.schema';
import { StoryCreateOrConnectWithoutImagesInputObjectSchema as StoryCreateOrConnectWithoutImagesInputObjectSchema } from './StoryCreateOrConnectWithoutImagesInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoryCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateNestedOneWithoutImagesInput>;
export const StoryCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();

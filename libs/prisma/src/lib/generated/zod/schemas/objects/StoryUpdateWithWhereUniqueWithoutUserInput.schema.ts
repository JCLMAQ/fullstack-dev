import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutUserInputObjectSchema as StoryUpdateWithoutUserInputObjectSchema } from './StoryUpdateWithoutUserInput.schema';
import { StoryUncheckedUpdateWithoutUserInputObjectSchema as StoryUncheckedUpdateWithoutUserInputObjectSchema } from './StoryUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StoryUpdateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const StoryUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutUserInput>;
export const StoryUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

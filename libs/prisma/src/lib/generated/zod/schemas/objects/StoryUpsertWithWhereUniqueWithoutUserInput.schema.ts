import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutUserInputObjectSchema as StoryUpdateWithoutUserInputObjectSchema } from './StoryUpdateWithoutUserInput.schema';
import { StoryUncheckedUpdateWithoutUserInputObjectSchema as StoryUncheckedUpdateWithoutUserInputObjectSchema } from './StoryUncheckedUpdateWithoutUserInput.schema';
import { StoryCreateWithoutUserInputObjectSchema as StoryCreateWithoutUserInputObjectSchema } from './StoryCreateWithoutUserInput.schema';
import { StoryUncheckedCreateWithoutUserInputObjectSchema as StoryUncheckedCreateWithoutUserInputObjectSchema } from './StoryUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StoryUpdateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => StoryCreateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StoryUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutUserInput>;
export const StoryUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

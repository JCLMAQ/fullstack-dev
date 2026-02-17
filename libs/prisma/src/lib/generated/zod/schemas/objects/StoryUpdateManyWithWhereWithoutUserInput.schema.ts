import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryScalarWhereInputObjectSchema as StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema';
import { StoryUpdateManyMutationInputObjectSchema as StoryUpdateManyMutationInputObjectSchema } from './StoryUpdateManyMutationInput.schema';
import { StoryUncheckedUpdateManyWithoutUserInputObjectSchema as StoryUncheckedUpdateManyWithoutUserInputObjectSchema } from './StoryUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StoryUpdateManyMutationInputObjectSchema), z.lazy(() => StoryUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const StoryUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutUserInput>;
export const StoryUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();

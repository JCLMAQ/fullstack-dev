import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutUserInputObjectSchema as StoryCreateWithoutUserInputObjectSchema } from './StoryCreateWithoutUserInput.schema';
import { StoryUncheckedCreateWithoutUserInputObjectSchema as StoryUncheckedCreateWithoutUserInputObjectSchema } from './StoryUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoryCreateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StoryCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateOrConnectWithoutUserInput>;
export const StoryCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryCreateWithoutUserInputObjectSchema as StoryCreateWithoutUserInputObjectSchema } from './StoryCreateWithoutUserInput.schema';
import { StoryUncheckedCreateWithoutUserInputObjectSchema as StoryUncheckedCreateWithoutUserInputObjectSchema } from './StoryUncheckedCreateWithoutUserInput.schema';
import { StoryCreateOrConnectWithoutUserInputObjectSchema as StoryCreateOrConnectWithoutUserInputObjectSchema } from './StoryCreateOrConnectWithoutUserInput.schema';
import { StoryCreateManyUserInputEnvelopeObjectSchema as StoryCreateManyUserInputEnvelopeObjectSchema } from './StoryCreateManyUserInputEnvelope.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutUserInputObjectSchema), z.lazy(() => StoryCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StoryCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StoryWhereUniqueInputObjectSchema), z.lazy(() => StoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StoryUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutUserInput>;
export const StoryUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();

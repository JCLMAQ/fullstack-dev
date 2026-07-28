import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryCreateWithoutUserInputObjectSchema as StoryCreateWithoutUserInputObjectSchema } from './StoryCreateWithoutUserInput.schema';
import { StoryUncheckedCreateWithoutUserInputObjectSchema as StoryUncheckedCreateWithoutUserInputObjectSchema } from './StoryUncheckedCreateWithoutUserInput.schema';
import { StoryCreateOrConnectWithoutUserInputObjectSchema as StoryCreateOrConnectWithoutUserInputObjectSchema } from './StoryCreateOrConnectWithoutUserInput.schema';
import { StoryUpsertWithWhereUniqueWithoutUserInputObjectSchema as StoryUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StoryUpsertWithWhereUniqueWithoutUserInput.schema';
import { StoryCreateManyUserInputEnvelopeObjectSchema as StoryCreateManyUserInputEnvelopeObjectSchema } from './StoryCreateManyUserInputEnvelope.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithWhereUniqueWithoutUserInputObjectSchema as StoryUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StoryUpdateWithWhereUniqueWithoutUserInput.schema';
import { StoryUpdateManyWithWhereWithoutUserInputObjectSchema as StoryUpdateManyWithWhereWithoutUserInputObjectSchema } from './StoryUpdateManyWithWhereWithoutUserInput.schema';
import { StoryScalarWhereInputObjectSchema as StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutUserInputObjectSchema), z.lazy(() => StoryCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoryCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StoryCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StoryUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StoryUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoryCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StoryWhereUniqueInputObjectSchema), z.lazy(() => StoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StoryWhereUniqueInputObjectSchema), z.lazy(() => StoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StoryWhereUniqueInputObjectSchema), z.lazy(() => StoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StoryWhereUniqueInputObjectSchema), z.lazy(() => StoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StoryUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StoryUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StoryUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => StoryUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StoryScalarWhereInputObjectSchema), z.lazy(() => StoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUncheckedUpdateManyWithoutUserNestedInput>;
export const StoryUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();

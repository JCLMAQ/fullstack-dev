import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutMainTagInputObjectSchema as TagValueCreateWithoutMainTagInputObjectSchema } from './TagValueCreateWithoutMainTagInput.schema';
import { TagValueUncheckedCreateWithoutMainTagInputObjectSchema as TagValueUncheckedCreateWithoutMainTagInputObjectSchema } from './TagValueUncheckedCreateWithoutMainTagInput.schema';
import { TagValueCreateOrConnectWithoutMainTagInputObjectSchema as TagValueCreateOrConnectWithoutMainTagInputObjectSchema } from './TagValueCreateOrConnectWithoutMainTagInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutMainTagInput.schema';
import { TagValueCreateManyMainTagInputEnvelopeObjectSchema as TagValueCreateManyMainTagInputEnvelopeObjectSchema } from './TagValueCreateManyMainTagInputEnvelope.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutMainTagInput.schema';
import { TagValueUpdateManyWithWhereWithoutMainTagInputObjectSchema as TagValueUpdateManyWithWhereWithoutMainTagInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutMainTagInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutMainTagInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutMainTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagValueCreateManyMainTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutMainTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUpdateManyWithoutMainTagNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithoutMainTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithoutMainTagNestedInput>;
export const TagValueUpdateManyWithoutMainTagNestedInputObjectZodSchema = makeSchema();

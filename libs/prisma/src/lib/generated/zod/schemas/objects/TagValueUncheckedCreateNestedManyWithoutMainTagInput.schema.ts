import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutMainTagInputObjectSchema as TagValueCreateWithoutMainTagInputObjectSchema } from './TagValueCreateWithoutMainTagInput.schema';
import { TagValueUncheckedCreateWithoutMainTagInputObjectSchema as TagValueUncheckedCreateWithoutMainTagInputObjectSchema } from './TagValueUncheckedCreateWithoutMainTagInput.schema';
import { TagValueCreateOrConnectWithoutMainTagInputObjectSchema as TagValueCreateOrConnectWithoutMainTagInputObjectSchema } from './TagValueCreateOrConnectWithoutMainTagInput.schema';
import { TagValueCreateManyMainTagInputEnvelopeObjectSchema as TagValueCreateManyMainTagInputEnvelopeObjectSchema } from './TagValueCreateManyMainTagInputEnvelope.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutMainTagInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutMainTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagValueCreateManyMainTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUncheckedCreateNestedManyWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedCreateNestedManyWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedCreateNestedManyWithoutMainTagInput>;
export const TagValueUncheckedCreateNestedManyWithoutMainTagInputObjectZodSchema = makeSchema();

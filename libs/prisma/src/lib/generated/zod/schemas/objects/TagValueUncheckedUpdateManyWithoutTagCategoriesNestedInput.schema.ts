import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutTagCategoriesInputObjectSchema as TagValueCreateWithoutTagCategoriesInputObjectSchema } from './TagValueCreateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagCategoriesInput.schema';
import { TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema as TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema } from './TagValueCreateOrConnectWithoutTagCategoriesInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutTagCategoriesInput.schema';
import { TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema as TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema } from './TagValueCreateManyTagCategoriesInputEnvelope.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutTagCategoriesInput.schema';
import { TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectSchema as TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutTagCategoriesInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUncheckedUpdateManyWithoutTagCategoriesNestedInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedUpdateManyWithoutTagCategoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedUpdateManyWithoutTagCategoriesNestedInput>;
export const TagValueUncheckedUpdateManyWithoutTagCategoriesNestedInputObjectZodSchema = makeSchema();

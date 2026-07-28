import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutTagCategoriesInputObjectSchema as TagValueCreateWithoutTagCategoriesInputObjectSchema } from './TagValueCreateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagCategoriesInput.schema';
import { TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema as TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema } from './TagValueCreateOrConnectWithoutTagCategoriesInput.schema';
import { TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema as TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema } from './TagValueCreateManyTagCategoriesInputEnvelope.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutTagCategoriesInput>;
export const TagValueCreateNestedManyWithoutTagCategoriesInputObjectZodSchema = makeSchema();

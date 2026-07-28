import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutTagCategoriesInputObjectSchema as TagValueCreateWithoutTagCategoriesInputObjectSchema } from './TagValueCreateWithoutTagCategoriesInput.schema';
import { TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema as TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedCreateWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutTagCategoriesInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTagCategoriesInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutTagCategoriesInput>;
export const TagValueCreateOrConnectWithoutTagCategoriesInputObjectZodSchema = makeSchema();

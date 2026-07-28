import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutTagCategoriesInputObjectSchema as TagValueUncheckedUpdateManyWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutTagCategoriesInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTagCategoriesInput>;
export const TagValueUpdateManyWithWhereWithoutTagCategoriesInputObjectZodSchema = makeSchema();

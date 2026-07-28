import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutMainTagInputObjectSchema as TagValueUncheckedUpdateManyWithoutMainTagInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutMainTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutMainTagInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutMainTagInput>;
export const TagValueUpdateManyWithWhereWithoutMainTagInputObjectZodSchema = makeSchema();

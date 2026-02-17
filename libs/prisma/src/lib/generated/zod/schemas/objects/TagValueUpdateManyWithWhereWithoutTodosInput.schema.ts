import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutTodosInputObjectSchema as TagValueUncheckedUpdateManyWithoutTodosInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutTodosInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutTodosInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTodosInput>;
export const TagValueUpdateManyWithWhereWithoutTodosInputObjectZodSchema = makeSchema();

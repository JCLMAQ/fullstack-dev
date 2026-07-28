import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutTasksInputObjectSchema as TagValueUncheckedUpdateManyWithoutTasksInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutTasksInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutTasksInput>;
export const TagValueUpdateManyWithWhereWithoutTasksInputObjectZodSchema = makeSchema();

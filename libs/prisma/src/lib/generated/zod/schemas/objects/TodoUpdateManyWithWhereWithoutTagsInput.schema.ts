import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutTagsInputObjectSchema as TodoUncheckedUpdateManyWithoutTagsInputObjectSchema } from './TodoUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutTagsInput>;
export const TodoUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();

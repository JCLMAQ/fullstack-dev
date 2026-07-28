import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutGroupsInputObjectSchema as TodoUncheckedUpdateManyWithoutGroupsInputObjectSchema } from './TodoUncheckedUpdateManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutGroupsInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutGroupsInput>;
export const TodoUpdateManyWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();

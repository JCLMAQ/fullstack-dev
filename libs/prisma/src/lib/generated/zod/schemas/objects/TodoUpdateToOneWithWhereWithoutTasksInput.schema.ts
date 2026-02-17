import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TodoUpdateWithoutTasksInputObjectSchema as TodoUpdateWithoutTasksInputObjectSchema } from './TodoUpdateWithoutTasksInput.schema';
import { TodoUncheckedUpdateWithoutTasksInputObjectSchema as TodoUncheckedUpdateWithoutTasksInputObjectSchema } from './TodoUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TodoUpdateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const TodoUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutTasksInput>;
export const TodoUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();

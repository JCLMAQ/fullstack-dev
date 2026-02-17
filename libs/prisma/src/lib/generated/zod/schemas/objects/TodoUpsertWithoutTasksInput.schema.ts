import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoUpdateWithoutTasksInputObjectSchema as TodoUpdateWithoutTasksInputObjectSchema } from './TodoUpdateWithoutTasksInput.schema';
import { TodoUncheckedUpdateWithoutTasksInputObjectSchema as TodoUncheckedUpdateWithoutTasksInputObjectSchema } from './TodoUncheckedUpdateWithoutTasksInput.schema';
import { TodoCreateWithoutTasksInputObjectSchema as TodoCreateWithoutTasksInputObjectSchema } from './TodoCreateWithoutTasksInput.schema';
import { TodoUncheckedCreateWithoutTasksInputObjectSchema as TodoUncheckedCreateWithoutTasksInputObjectSchema } from './TodoUncheckedCreateWithoutTasksInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TodoUpdateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithoutTasksInput>;
export const TodoUpsertWithoutTasksInputObjectZodSchema = makeSchema();

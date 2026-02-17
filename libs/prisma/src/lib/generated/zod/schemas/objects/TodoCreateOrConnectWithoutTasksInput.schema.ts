import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutTasksInputObjectSchema as TodoCreateWithoutTasksInputObjectSchema } from './TodoCreateWithoutTasksInput.schema';
import { TodoUncheckedCreateWithoutTasksInputObjectSchema as TodoUncheckedCreateWithoutTasksInputObjectSchema } from './TodoUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutTasksInput>;
export const TodoCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();

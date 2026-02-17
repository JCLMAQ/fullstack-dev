import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateWithoutTasksInputObjectSchema as TodoCreateWithoutTasksInputObjectSchema } from './TodoCreateWithoutTasksInput.schema';
import { TodoUncheckedCreateWithoutTasksInputObjectSchema as TodoUncheckedCreateWithoutTasksInputObjectSchema } from './TodoUncheckedCreateWithoutTasksInput.schema';
import { TodoCreateOrConnectWithoutTasksInputObjectSchema as TodoCreateOrConnectWithoutTasksInputObjectSchema } from './TodoCreateOrConnectWithoutTasksInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional()
}).strict();
export const TodoCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.TodoCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateNestedOneWithoutTasksInput>;
export const TodoCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();

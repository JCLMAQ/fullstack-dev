import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutTasksInputObjectSchema as TodoCreateWithoutTasksInputObjectSchema } from './TodoCreateWithoutTasksInput.schema';
import { TodoUncheckedCreateWithoutTasksInputObjectSchema as TodoUncheckedCreateWithoutTasksInputObjectSchema } from './TodoUncheckedCreateWithoutTasksInput.schema';
import { TodoCreateOrConnectWithoutTasksInputObjectSchema as TodoCreateOrConnectWithoutTasksInputObjectSchema } from './TodoCreateOrConnectWithoutTasksInput.schema';
import { TodoUpsertWithoutTasksInputObjectSchema as TodoUpsertWithoutTasksInputObjectSchema } from './TodoUpsertWithoutTasksInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateToOneWithWhereWithoutTasksInputObjectSchema as TodoUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './TodoUpdateToOneWithWhereWithoutTasksInput.schema';
import { TodoUpdateWithoutTasksInputObjectSchema as TodoUpdateWithoutTasksInputObjectSchema } from './TodoUpdateWithoutTasksInput.schema';
import { TodoUncheckedUpdateWithoutTasksInputObjectSchema as TodoUncheckedUpdateWithoutTasksInputObjectSchema } from './TodoUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => TodoUpsertWithoutTasksInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TodoUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => TodoUpdateWithoutTasksInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const TodoUpdateOneWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateOneWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateOneWithoutTasksNestedInput>;
export const TodoUpdateOneWithoutTasksNestedInputObjectZodSchema = makeSchema();

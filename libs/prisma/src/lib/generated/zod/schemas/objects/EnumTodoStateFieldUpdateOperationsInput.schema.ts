import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoStateSchema } from '../enums/TodoState.schema'

const makeSchema = () => z.object({
  set: TodoStateSchema.optional()
}).strict();
export const EnumTodoStateFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTodoStateFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTodoStateFieldUpdateOperationsInput>;
export const EnumTodoStateFieldUpdateOperationsInputObjectZodSchema = makeSchema();

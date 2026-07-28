import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskStateSchema } from '../enums/TaskState.schema'

const makeSchema = () => z.object({
  set: TaskStateSchema.optional()
}).strict();
export const EnumTaskStateFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTaskStateFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTaskStateFieldUpdateOperationsInput>;
export const EnumTaskStateFieldUpdateOperationsInputObjectZodSchema = makeSchema();

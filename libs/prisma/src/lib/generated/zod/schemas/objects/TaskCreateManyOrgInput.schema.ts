import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskStateSchema } from '../enums/TaskState.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  ownerId: z.string(),
  orderTask: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  taskState: TaskStateSchema.optional(),
  mainTaskId: z.string().optional().nullable(),
  todoId: z.string().optional().nullable()
}).strict();
export const TaskCreateManyOrgInputObjectSchema: z.ZodType<Prisma.TaskCreateManyOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyOrgInput>;
export const TaskCreateManyOrgInputObjectZodSchema = makeSchema();

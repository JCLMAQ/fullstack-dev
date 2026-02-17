import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  taskId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTaskLinkCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateManyUserInput>;
export const UserTaskLinkCreateManyUserInputObjectZodSchema = makeSchema();

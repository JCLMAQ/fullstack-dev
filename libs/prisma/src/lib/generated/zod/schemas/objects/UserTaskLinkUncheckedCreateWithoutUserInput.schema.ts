import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  taskId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedCreateWithoutUserInput>;
export const UserTaskLinkUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();

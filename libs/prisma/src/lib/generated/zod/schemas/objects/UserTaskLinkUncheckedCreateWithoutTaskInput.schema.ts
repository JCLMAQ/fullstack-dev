import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  userId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedCreateWithoutTaskInput>;
export const UserTaskLinkUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();

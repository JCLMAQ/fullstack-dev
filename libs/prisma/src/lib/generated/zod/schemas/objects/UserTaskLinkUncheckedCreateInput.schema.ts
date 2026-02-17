import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  taskId: z.string(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  comment: z.string()
}).strict();
export const UserTaskLinkUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedCreateInput>;
export const UserTaskLinkUncheckedCreateInputObjectZodSchema = makeSchema();

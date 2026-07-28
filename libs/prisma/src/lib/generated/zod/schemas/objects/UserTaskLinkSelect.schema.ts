import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  taskId: z.boolean().optional(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  comment: z.boolean().optional()
}).strict();
export const UserTaskLinkSelectObjectSchema: z.ZodType<Prisma.UserTaskLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkSelect>;
export const UserTaskLinkSelectObjectZodSchema = makeSchema();

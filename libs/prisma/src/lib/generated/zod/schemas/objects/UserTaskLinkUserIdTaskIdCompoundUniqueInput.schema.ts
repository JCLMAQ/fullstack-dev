import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  userId: z.string(),
  taskId: z.string()
}).strict();
export const UserTaskLinkUserIdTaskIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUserIdTaskIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUserIdTaskIdCompoundUniqueInput>;
export const UserTaskLinkUserIdTaskIdCompoundUniqueInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkUserIdTaskIdCompoundUniqueInputObjectSchema as UserTaskLinkUserIdTaskIdCompoundUniqueInputObjectSchema } from './UserTaskLinkUserIdTaskIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  userId_taskId: z.lazy(() => UserTaskLinkUserIdTaskIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const UserTaskLinkWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserTaskLinkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkWhereUniqueInput>;
export const UserTaskLinkWhereUniqueInputObjectZodSchema = makeSchema();

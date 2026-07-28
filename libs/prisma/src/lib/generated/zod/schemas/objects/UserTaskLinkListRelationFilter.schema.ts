import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './UserTaskLinkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UserTaskLinkWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserTaskLinkWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserTaskLinkWhereInputObjectSchema).optional()
}).strict();
export const UserTaskLinkListRelationFilterObjectSchema: z.ZodType<Prisma.UserTaskLinkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkListRelationFilter>;
export const UserTaskLinkListRelationFilterObjectZodSchema = makeSchema();

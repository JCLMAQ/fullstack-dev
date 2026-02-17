import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './UserFollowerLinkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkListRelationFilterObjectSchema: z.ZodType<Prisma.UserFollowerLinkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkListRelationFilter>;
export const UserFollowerLinkListRelationFilterObjectZodSchema = makeSchema();

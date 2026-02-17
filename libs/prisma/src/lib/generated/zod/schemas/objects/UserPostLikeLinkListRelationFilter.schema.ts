import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './UserPostLikeLinkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkListRelationFilterObjectSchema: z.ZodType<Prisma.UserPostLikeLinkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkListRelationFilter>;
export const UserPostLikeLinkListRelationFilterObjectZodSchema = makeSchema();

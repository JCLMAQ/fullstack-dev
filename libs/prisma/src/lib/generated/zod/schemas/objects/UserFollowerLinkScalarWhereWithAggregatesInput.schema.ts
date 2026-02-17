import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const userfollowerlinkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  follower_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserFollowerLinkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkScalarWhereWithAggregatesInput> = userfollowerlinkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserFollowerLinkScalarWhereWithAggregatesInput>;
export const UserFollowerLinkScalarWhereWithAggregatesInputObjectZodSchema = userfollowerlinkscalarwherewithaggregatesinputSchema;

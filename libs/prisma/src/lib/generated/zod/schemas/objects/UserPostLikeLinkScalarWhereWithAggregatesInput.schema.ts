import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const userpostlikelinkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  post_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserPostLikeLinkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkScalarWhereWithAggregatesInput> = userpostlikelinkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserPostLikeLinkScalarWhereWithAggregatesInput>;
export const UserPostLikeLinkScalarWhereWithAggregatesInputObjectZodSchema = userpostlikelinkscalarwherewithaggregatesinputSchema;

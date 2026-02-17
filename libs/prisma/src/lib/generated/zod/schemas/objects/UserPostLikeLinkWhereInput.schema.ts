import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PostScalarRelationFilterObjectSchema as PostScalarRelationFilterObjectSchema } from './PostScalarRelationFilter.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const userpostlikelinkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserPostLikeLinkWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPostLikeLinkWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  post_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  post: z.union([z.lazy(() => PostScalarRelationFilterObjectSchema), z.lazy(() => PostWhereInputObjectSchema)]).optional()
}).strict();
export const UserPostLikeLinkWhereInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkWhereInput> = userpostlikelinkwhereinputSchema as unknown as z.ZodType<Prisma.UserPostLikeLinkWhereInput>;
export const UserPostLikeLinkWhereInputObjectZodSchema = userpostlikelinkwhereinputSchema;

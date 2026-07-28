import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const userfollowerlinkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserFollowerLinkWhereInputObjectSchema), z.lazy(() => UserFollowerLinkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserFollowerLinkWhereInputObjectSchema), z.lazy(() => UserFollowerLinkWhereInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  follower_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  follower: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const UserFollowerLinkWhereInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkWhereInput> = userfollowerlinkwhereinputSchema as unknown as z.ZodType<Prisma.UserFollowerLinkWhereInput>;
export const UserFollowerLinkWhereInputObjectZodSchema = userfollowerlinkwhereinputSchema;

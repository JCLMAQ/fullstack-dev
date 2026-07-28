import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const userfollowerlinkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  follower_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserFollowerLinkScalarWhereInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkScalarWhereInput> = userfollowerlinkscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserFollowerLinkScalarWhereInput>;
export const UserFollowerLinkScalarWhereInputObjectZodSchema = userfollowerlinkscalarwhereinputSchema;

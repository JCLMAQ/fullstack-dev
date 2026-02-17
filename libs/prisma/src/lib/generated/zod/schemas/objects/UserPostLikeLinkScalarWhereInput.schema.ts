import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const userpostlikelinkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema).array()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  post_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserPostLikeLinkScalarWhereInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkScalarWhereInput> = userpostlikelinkscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserPostLikeLinkScalarWhereInput>;
export const UserPostLikeLinkScalarWhereInputObjectZodSchema = userpostlikelinkscalarwhereinputSchema;

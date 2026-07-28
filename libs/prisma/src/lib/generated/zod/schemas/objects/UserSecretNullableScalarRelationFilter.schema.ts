import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './UserSecretWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserSecretWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserSecretWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserSecretNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserSecretNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretNullableScalarRelationFilter>;
export const UserSecretNullableScalarRelationFilterObjectZodSchema = makeSchema();

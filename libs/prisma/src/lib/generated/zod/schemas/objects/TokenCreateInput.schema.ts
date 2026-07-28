import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { UserCreateNestedOneWithoutTokensInputObjectSchema as UserCreateNestedOneWithoutTokensInputObjectSchema } from './UserCreateNestedOneWithoutTokensInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  tokenId: z.string().optional().nullable(),
  type: TokenTypeSchema,
  emailToken: z.string().optional().nullable(),
  valid: z.boolean().optional(),
  expiration: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutTokensInputObjectSchema)
}).strict();
export const TokenCreateInputObjectSchema: z.ZodType<Prisma.TokenCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenCreateInput>;
export const TokenCreateInputObjectZodSchema = makeSchema();

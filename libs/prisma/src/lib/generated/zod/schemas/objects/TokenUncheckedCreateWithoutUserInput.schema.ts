import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TokenTypeSchema } from '../enums/TokenType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  tokenId: z.string().optional().nullable(),
  type: TokenTypeSchema,
  emailToken: z.string().optional().nullable(),
  valid: z.boolean().optional(),
  expiration: z.coerce.date()
}).strict();
export const TokenUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TokenUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenUncheckedCreateWithoutUserInput>;
export const TokenUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();

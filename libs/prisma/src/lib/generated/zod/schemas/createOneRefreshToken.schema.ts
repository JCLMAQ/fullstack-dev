import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './objects/RefreshTokenSelect.schema';
import { RefreshTokenCreateInputObjectSchema as RefreshTokenCreateInputObjectSchema } from './objects/RefreshTokenCreateInput.schema';
import { RefreshTokenUncheckedCreateInputObjectSchema as RefreshTokenUncheckedCreateInputObjectSchema } from './objects/RefreshTokenUncheckedCreateInput.schema';

export const RefreshTokenCreateOneSchema: z.ZodType<Prisma.RefreshTokenCreateArgs> = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  data: z.union([RefreshTokenCreateInputObjectSchema, RefreshTokenUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RefreshTokenCreateArgs>;

export const RefreshTokenCreateOneZodSchema = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  data: z.union([RefreshTokenCreateInputObjectSchema, RefreshTokenUncheckedCreateInputObjectSchema]) }).strict();
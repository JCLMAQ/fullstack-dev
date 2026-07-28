import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './objects/RefreshTokenSelect.schema';
import { RefreshTokenWhereUniqueInputObjectSchema as RefreshTokenWhereUniqueInputObjectSchema } from './objects/RefreshTokenWhereUniqueInput.schema';

export const RefreshTokenDeleteOneSchema: z.ZodType<Prisma.RefreshTokenDeleteArgs> = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefreshTokenDeleteArgs>;

export const RefreshTokenDeleteOneZodSchema = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict();
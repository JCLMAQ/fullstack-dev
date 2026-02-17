import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './objects/RefreshTokenSelect.schema';
import { RefreshTokenWhereUniqueInputObjectSchema as RefreshTokenWhereUniqueInputObjectSchema } from './objects/RefreshTokenWhereUniqueInput.schema';

export const RefreshTokenFindUniqueSchema: z.ZodType<Prisma.RefreshTokenFindUniqueArgs> = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefreshTokenFindUniqueArgs>;

export const RefreshTokenFindUniqueZodSchema = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict();
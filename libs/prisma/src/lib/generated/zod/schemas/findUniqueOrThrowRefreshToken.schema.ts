import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './objects/RefreshTokenSelect.schema';
import { RefreshTokenWhereUniqueInputObjectSchema as RefreshTokenWhereUniqueInputObjectSchema } from './objects/RefreshTokenWhereUniqueInput.schema';

export const RefreshTokenFindUniqueOrThrowSchema: z.ZodType<Prisma.RefreshTokenFindUniqueOrThrowArgs> = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefreshTokenFindUniqueOrThrowArgs>;

export const RefreshTokenFindUniqueOrThrowZodSchema = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  where: RefreshTokenWhereUniqueInputObjectSchema }).strict();
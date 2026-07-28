import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { RefreshTokenSelectObjectSchema as RefreshTokenSelectObjectSchema } from './objects/RefreshTokenSelect.schema';
import { RefreshTokenUpdateInputObjectSchema as RefreshTokenUpdateInputObjectSchema } from './objects/RefreshTokenUpdateInput.schema';
import { RefreshTokenUncheckedUpdateInputObjectSchema as RefreshTokenUncheckedUpdateInputObjectSchema } from './objects/RefreshTokenUncheckedUpdateInput.schema';
import { RefreshTokenWhereUniqueInputObjectSchema as RefreshTokenWhereUniqueInputObjectSchema } from './objects/RefreshTokenWhereUniqueInput.schema';

export const RefreshTokenUpdateOneSchema: z.ZodType<Prisma.RefreshTokenUpdateArgs> = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  data: z.union([RefreshTokenUpdateInputObjectSchema, RefreshTokenUncheckedUpdateInputObjectSchema]), where: RefreshTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefreshTokenUpdateArgs>;

export const RefreshTokenUpdateOneZodSchema = z.object({ select: RefreshTokenSelectObjectSchema.optional(),  data: z.union([RefreshTokenUpdateInputObjectSchema, RefreshTokenUncheckedUpdateInputObjectSchema]), where: RefreshTokenWhereUniqueInputObjectSchema }).strict();
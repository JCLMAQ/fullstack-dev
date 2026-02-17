import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';

export const ScopeDeleteManySchema: z.ZodType<Prisma.ScopeDeleteManyArgs> = z.object({ where: ScopeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScopeDeleteManyArgs>;

export const ScopeDeleteManyZodSchema = z.object({ where: ScopeWhereInputObjectSchema.optional() }).strict();
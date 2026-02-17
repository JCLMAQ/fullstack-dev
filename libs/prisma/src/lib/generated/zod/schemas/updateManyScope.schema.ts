import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeUpdateManyMutationInputObjectSchema as ScopeUpdateManyMutationInputObjectSchema } from './objects/ScopeUpdateManyMutationInput.schema';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';

export const ScopeUpdateManySchema: z.ZodType<Prisma.ScopeUpdateManyArgs> = z.object({ data: ScopeUpdateManyMutationInputObjectSchema, where: ScopeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScopeUpdateManyArgs>;

export const ScopeUpdateManyZodSchema = z.object({ data: ScopeUpdateManyMutationInputObjectSchema, where: ScopeWhereInputObjectSchema.optional() }).strict();
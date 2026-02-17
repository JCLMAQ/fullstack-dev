import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeUpdateManyMutationInputObjectSchema as ScopeUpdateManyMutationInputObjectSchema } from './objects/ScopeUpdateManyMutationInput.schema';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';

export const ScopeUpdateManyAndReturnSchema: z.ZodType<Prisma.ScopeUpdateManyAndReturnArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), data: ScopeUpdateManyMutationInputObjectSchema, where: ScopeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScopeUpdateManyAndReturnArgs>;

export const ScopeUpdateManyAndReturnZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), data: ScopeUpdateManyMutationInputObjectSchema, where: ScopeWhereInputObjectSchema.optional() }).strict();
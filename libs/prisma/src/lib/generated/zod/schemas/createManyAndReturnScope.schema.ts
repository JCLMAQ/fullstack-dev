import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './objects/ScopeSelect.schema';
import { ScopeCreateManyInputObjectSchema as ScopeCreateManyInputObjectSchema } from './objects/ScopeCreateManyInput.schema';

export const ScopeCreateManyAndReturnSchema: z.ZodType<Prisma.ScopeCreateManyAndReturnArgs> = z.object({ select: ScopeSelectObjectSchema.optional(), data: z.union([ ScopeCreateManyInputObjectSchema, z.array(ScopeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ScopeCreateManyAndReturnArgs>;

export const ScopeCreateManyAndReturnZodSchema = z.object({ select: ScopeSelectObjectSchema.optional(), data: z.union([ ScopeCreateManyInputObjectSchema, z.array(ScopeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
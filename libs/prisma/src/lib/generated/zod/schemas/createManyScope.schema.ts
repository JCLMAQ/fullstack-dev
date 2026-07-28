import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeCreateManyInputObjectSchema as ScopeCreateManyInputObjectSchema } from './objects/ScopeCreateManyInput.schema';

export const ScopeCreateManySchema: z.ZodType<Prisma.ScopeCreateManyArgs> = z.object({ data: z.union([ ScopeCreateManyInputObjectSchema, z.array(ScopeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ScopeCreateManyArgs>;

export const ScopeCreateManyZodSchema = z.object({ data: z.union([ ScopeCreateManyInputObjectSchema, z.array(ScopeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
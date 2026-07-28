import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ScopeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ScopeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeWhereUniqueInput>;
export const ScopeWhereUniqueInputObjectZodSchema = makeSchema();

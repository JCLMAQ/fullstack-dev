import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LanguageCountAggregateInputObjectSchema: z.ZodType<Prisma.LanguageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCountAggregateInputType>;
export const LanguageCountAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  slug: z.string().optional()
}).strict();
export const WordWhereUniqueInputObjectSchema: z.ZodType<Prisma.WordWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WordWhereUniqueInput>;
export const WordWhereUniqueInputObjectZodSchema = makeSchema();

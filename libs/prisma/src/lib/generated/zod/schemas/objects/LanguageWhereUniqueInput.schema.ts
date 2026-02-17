import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string().optional()
}).strict();
export const LanguageWhereUniqueInputObjectSchema: z.ZodType<Prisma.LanguageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageWhereUniqueInput>;
export const LanguageWhereUniqueInputObjectZodSchema = makeSchema();

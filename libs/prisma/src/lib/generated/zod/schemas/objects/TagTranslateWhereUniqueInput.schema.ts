import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const TagTranslateWhereUniqueInputObjectSchema: z.ZodType<Prisma.TagTranslateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateWhereUniqueInput>;
export const TagTranslateWhereUniqueInputObjectZodSchema = makeSchema();

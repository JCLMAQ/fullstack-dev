import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const TagValueWhereUniqueInputObjectSchema: z.ZodType<Prisma.TagValueWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueWhereUniqueInput>;
export const TagValueWhereUniqueInputObjectZodSchema = makeSchema();

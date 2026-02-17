import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ApiKeyWhereUniqueInputObjectSchema: z.ZodType<Prisma.ApiKeyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyWhereUniqueInput>;
export const ApiKeyWhereUniqueInputObjectZodSchema = makeSchema();

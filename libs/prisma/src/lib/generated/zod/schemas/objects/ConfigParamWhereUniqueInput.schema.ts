import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const ConfigParamWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConfigParamWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamWhereUniqueInput>;
export const ConfigParamWhereUniqueInputObjectZodSchema = makeSchema();

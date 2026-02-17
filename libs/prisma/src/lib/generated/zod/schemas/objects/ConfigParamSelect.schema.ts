import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  name: z.boolean().optional(),
  value: z.boolean().optional(),
  utility: z.boolean().optional()
}).strict();
export const ConfigParamSelectObjectSchema: z.ZodType<Prisma.ConfigParamSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamSelect>;
export const ConfigParamSelectObjectZodSchema = makeSchema();

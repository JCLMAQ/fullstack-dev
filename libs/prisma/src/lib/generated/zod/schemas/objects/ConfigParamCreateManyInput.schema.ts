import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  name: z.string(),
  value: z.string(),
  utility: z.string()
}).strict();
export const ConfigParamCreateManyInputObjectSchema: z.ZodType<Prisma.ConfigParamCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamCreateManyInput>;
export const ConfigParamCreateManyInputObjectZodSchema = makeSchema();

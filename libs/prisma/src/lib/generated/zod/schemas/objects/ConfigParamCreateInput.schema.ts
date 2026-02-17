import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  name: z.string(),
  value: z.string(),
  utility: z.string()
}).strict();
export const ConfigParamCreateInputObjectSchema: z.ZodType<Prisma.ConfigParamCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamCreateInput>;
export const ConfigParamCreateInputObjectZodSchema = makeSchema();

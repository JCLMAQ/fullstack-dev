import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  utility: SortOrderSchema.optional()
}).strict();
export const ConfigParamOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConfigParamOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamOrderByWithRelationInput>;
export const ConfigParamOrderByWithRelationInputObjectZodSchema = makeSchema();

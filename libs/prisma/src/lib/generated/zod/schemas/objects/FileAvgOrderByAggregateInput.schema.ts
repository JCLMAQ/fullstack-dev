import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  fileSize: SortOrderSchema.optional(),
  downloadCount: SortOrderSchema.optional(),
  size: SortOrderSchema.optional()
}).strict();
export const FileAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAvgOrderByAggregateInput>;
export const FileAvgOrderByAggregateInputObjectZodSchema = makeSchema();

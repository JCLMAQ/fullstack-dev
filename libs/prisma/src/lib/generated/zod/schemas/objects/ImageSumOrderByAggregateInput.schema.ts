import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  fileSize: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  sequence: SortOrderSchema.optional()
}).strict();
export const ImageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageSumOrderByAggregateInput>;
export const ImageSumOrderByAggregateInputObjectZodSchema = makeSchema();

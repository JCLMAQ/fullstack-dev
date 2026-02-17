import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  fileSize: z.literal(true).optional(),
  downloadCount: z.literal(true).optional(),
  size: z.literal(true).optional()
}).strict();
export const FileAvgAggregateInputObjectSchema: z.ZodType<Prisma.FileAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileAvgAggregateInputType>;
export const FileAvgAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  fileSize: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  sequence: z.literal(true).optional()
}).strict();
export const ImageAvgAggregateInputObjectSchema: z.ZodType<Prisma.ImageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageAvgAggregateInputType>;
export const ImageAvgAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  fileSize: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  sequence: z.literal(true).optional()
}).strict();
export const ImageSumAggregateInputObjectSchema: z.ZodType<Prisma.ImageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageSumAggregateInputType>;
export const ImageSumAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  doneAt: z.literal(true).optional(),
  modifiedById: z.literal(true).optional(),
  modelName: z.literal(true).optional(),
  recordId: z.literal(true).optional(),
  operation: z.literal(true).optional()
}).strict();
export const ChangesTrackingMinAggregateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingMinAggregateInputType>;
export const ChangesTrackingMinAggregateInputObjectZodSchema = makeSchema();

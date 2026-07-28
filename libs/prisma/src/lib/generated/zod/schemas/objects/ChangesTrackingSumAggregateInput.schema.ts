import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ChangesTrackingSumAggregateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingSumAggregateInputType>;
export const ChangesTrackingSumAggregateInputObjectZodSchema = makeSchema();

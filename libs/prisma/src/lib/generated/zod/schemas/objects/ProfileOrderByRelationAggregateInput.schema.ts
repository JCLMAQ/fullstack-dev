import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProfileOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProfileOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByRelationAggregateInput>;
export const ProfileOrderByRelationAggregateInputObjectZodSchema = makeSchema();

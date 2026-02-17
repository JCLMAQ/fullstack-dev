import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserPostLikeLinkOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkOrderByRelationAggregateInput>;
export const UserPostLikeLinkOrderByRelationAggregateInputObjectZodSchema = makeSchema();

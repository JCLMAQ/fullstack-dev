import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserFollowerLinkOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkOrderByRelationAggregateInput>;
export const UserFollowerLinkOrderByRelationAggregateInputObjectZodSchema = makeSchema();

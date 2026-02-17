import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  emailOrgId: SortOrderSchema.optional()
}).strict();
export const OrgEmailUseToAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToAvgOrderByAggregateInput>;
export const OrgEmailUseToAvgOrderByAggregateInputObjectZodSchema = makeSchema();

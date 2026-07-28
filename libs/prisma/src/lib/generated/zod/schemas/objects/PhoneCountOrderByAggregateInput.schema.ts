import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  countryCode: SortOrderSchema.optional(),
  countryIso: SortOrderSchema.optional(),
  number: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  phoneType: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional()
}).strict();
export const PhoneCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PhoneCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCountOrderByAggregateInput>;
export const PhoneCountOrderByAggregateInputObjectZodSchema = makeSchema();

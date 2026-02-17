import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  street: SortOrderSchema.optional(),
  buildingNum: SortOrderSchema.optional(),
  aptNum: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zipCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  countryIso: SortOrderSchema.optional(),
  addressType: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional()
}).strict();
export const AddressMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressMinOrderByAggregateInput>;
export const AddressMinOrderByAggregateInputObjectZodSchema = makeSchema();

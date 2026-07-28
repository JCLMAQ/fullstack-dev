import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
export const AddressMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressMaxOrderByAggregateInput>;
export const AddressMaxOrderByAggregateInputObjectZodSchema = makeSchema();

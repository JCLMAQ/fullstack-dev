import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

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
  addressType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPrimary: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithRelationInput>;
export const AddressOrderByWithRelationInputObjectZodSchema = makeSchema();

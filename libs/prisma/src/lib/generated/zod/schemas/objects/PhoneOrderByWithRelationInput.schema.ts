import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  countryCode: SortOrderSchema.optional(),
  countryIso: SortOrderSchema.optional(),
  number: SortOrderSchema.optional(),
  extension: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phoneType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPrimary: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PhoneOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PhoneOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneOrderByWithRelationInput>;
export const PhoneOrderByWithRelationInputObjectZodSchema = makeSchema();

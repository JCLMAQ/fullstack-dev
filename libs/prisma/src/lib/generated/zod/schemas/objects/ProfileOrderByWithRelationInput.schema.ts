import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderProfile: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  Users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithRelationInput>;
export const ProfileOrderByWithRelationInputObjectZodSchema = makeSchema();

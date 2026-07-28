import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doneAt: SortOrderSchema.optional(),
  modifiedById: SortOrderSchema.optional(),
  modelName: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  newData: SortOrderSchema.optional(),
  oldData: SortOrderSchema.optional(),
  modifiedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ChangesTrackingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChangesTrackingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingOrderByWithRelationInput>;
export const ChangesTrackingOrderByWithRelationInputObjectZodSchema = makeSchema();

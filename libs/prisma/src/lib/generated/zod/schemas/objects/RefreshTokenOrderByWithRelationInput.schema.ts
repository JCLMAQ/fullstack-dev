import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  tokenId: SortOrderSchema.optional()
}).strict();
export const RefreshTokenOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RefreshTokenOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenOrderByWithRelationInput>;
export const RefreshTokenOrderByWithRelationInputObjectZodSchema = makeSchema();

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
  domain: SortOrderSchema.optional(),
  allowed: SortOrderSchema.optional()
}).strict();
export const AppEmailDomainOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AppEmailDomainOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainOrderByWithRelationInput>;
export const AppEmailDomainOrderByWithRelationInputObjectZodSchema = makeSchema();

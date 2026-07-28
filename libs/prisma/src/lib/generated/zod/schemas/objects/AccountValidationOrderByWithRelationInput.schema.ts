import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isValidated: SortOrderSchema.optional(),
  emailToken: SortOrderSchema.optional(),
  timeStamp: SortOrderSchema.optional()
}).strict();
export const AccountValidationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountValidationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationOrderByWithRelationInput>;
export const AccountValidationOrderByWithRelationInputObjectZodSchema = makeSchema();

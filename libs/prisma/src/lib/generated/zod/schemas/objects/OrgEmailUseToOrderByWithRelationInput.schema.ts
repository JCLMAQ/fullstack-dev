import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgEmailOrderByWithRelationInputObjectSchema as OrgEmailOrderByWithRelationInputObjectSchema } from './OrgEmailOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  useTo: SortOrderSchema.optional(),
  isActiv: SortOrderSchema.optional(),
  emailOrgId: SortOrderSchema.optional(),
  emailOrg: z.lazy(() => OrgEmailOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OrgEmailUseToOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToOrderByWithRelationInput>;
export const OrgEmailUseToOrderByWithRelationInputObjectZodSchema = makeSchema();

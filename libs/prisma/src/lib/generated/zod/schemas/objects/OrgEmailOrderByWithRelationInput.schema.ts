import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { OrgEmailUseToOrderByRelationAggregateInputObjectSchema as OrgEmailUseToOrderByRelationAggregateInputObjectSchema } from './OrgEmailUseToOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orgId: SortOrderSchema.optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  OrgEmailUseTos: z.lazy(() => OrgEmailUseToOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrgEmailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrgEmailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailOrderByWithRelationInput>;
export const OrgEmailOrderByWithRelationInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  domainName: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OrgDomainOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrgDomainOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainOrderByWithRelationInput>;
export const OrgDomainOrderByWithRelationInputObjectZodSchema = makeSchema();

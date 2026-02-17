import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgEmailOrderByRelationAggregateInputObjectSchema as OrgEmailOrderByRelationAggregateInputObjectSchema } from './OrgEmailOrderByRelationAggregateInput.schema';
import { OrgDomainOrderByRelationAggregateInputObjectSchema as OrgDomainOrderByRelationAggregateInputObjectSchema } from './OrgDomainOrderByRelationAggregateInput.schema';
import { OrganizationOrderByRelationAggregateInputObjectSchema as OrganizationOrderByRelationAggregateInputObjectSchema } from './OrganizationOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema as TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema as ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema'

const organizationorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailITAdmin: SortOrderSchema.optional(),
  webSite: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mainOrgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OrgEmails: z.lazy(() => OrgEmailOrderByRelationAggregateInputObjectSchema).optional(),
  OrgDomains: z.lazy(() => OrgDomainOrderByRelationAggregateInputObjectSchema).optional(),
  mainOrg: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  OrgEntity: z.lazy(() => OrganizationOrderByRelationAggregateInputObjectSchema).optional(),
  Members: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  Posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  Files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoOrderByRelationAggregateInputObjectSchema).optional(),
  Images: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrganizationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = organizationorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.OrganizationOrderByWithRelationInput>;
export const OrganizationOrderByWithRelationInputObjectZodSchema = organizationorderbywithrelationinputSchema;

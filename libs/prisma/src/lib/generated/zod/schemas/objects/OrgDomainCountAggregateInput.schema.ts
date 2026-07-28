import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  domainName: z.literal(true).optional(),
  extension: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrgDomainCountAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCountAggregateInputType>;
export const OrgDomainCountAggregateInputObjectZodSchema = makeSchema();

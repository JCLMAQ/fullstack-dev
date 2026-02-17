import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


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
  orgId: z.literal(true).optional()
}).strict();
export const OrgDomainMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainMaxAggregateInputType>;
export const OrgDomainMaxAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  address: z.literal(true).optional(),
  emailITAdmin: z.literal(true).optional(),
  webSite: z.literal(true).optional(),
  mainOrgId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrganizationCountAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCountAggregateInputType>;
export const OrganizationCountAggregateInputObjectZodSchema = makeSchema();

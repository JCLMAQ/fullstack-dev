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
  useTo: z.literal(true).optional(),
  isActiv: z.literal(true).optional(),
  emailOrgId: z.literal(true).optional()
}).strict();
export const OrgEmailUseToMinAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToMinAggregateInputType>;
export const OrgEmailUseToMinAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
export const OrgEmailUseToAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    useTo: z.number(),
    isActiv: z.number(),
    emailOrg: z.number(),
    emailOrgId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable(),
    emailOrgId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable(),
    emailOrgId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    useTo: z.string().nullable(),
    emailOrgId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    useTo: z.string().nullable(),
    emailOrgId: z.number().int().nullable()
  }).nullable().optional()});
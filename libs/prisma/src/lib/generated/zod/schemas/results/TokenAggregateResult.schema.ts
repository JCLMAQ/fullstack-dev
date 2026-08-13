import * as z from 'zod';
export const TokenAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    tokenId: z.number().optional(),
    type: z.number().optional(),
    emailToken: z.number().optional(),
    valid: z.number().optional(),
    expiration: z.number().optional(),
    userId: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    tokenId: z.string().nullable().optional(),
    type: z.unknown().nullable().optional(),
    emailToken: z.string().nullable().optional(),
    valid: z.boolean().nullable().optional(),
    expiration: z.date().nullable().optional(),
    userId: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    tokenId: z.string().nullable().optional(),
    type: z.unknown().nullable().optional(),
    emailToken: z.string().nullable().optional(),
    valid: z.boolean().nullable().optional(),
    expiration: z.date().nullable().optional(),
    userId: z.string().nullable().optional()
  }).nullable().optional()});
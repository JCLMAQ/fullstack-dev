import * as z from 'zod';
export const RefreshTokenGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date(),
  userId: z.string(),
  tokenId: z.string(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    userId: z.number(),
    tokenId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    userId: z.string().nullable(),
    tokenId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    userId: z.string().nullable(),
    tokenId: z.string().nullable()
  }).nullable().optional()
}));
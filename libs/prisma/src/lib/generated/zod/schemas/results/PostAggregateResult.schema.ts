import * as z from 'zod';
export const PostAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    numSeq: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    isPublic: z.number(),
    owner: z.number(),
    ownerId: z.number(),
    org: z.number(),
    orgId: z.number(),
    groups: z.number(),
    orderPost: z.number(),
    title: z.number(),
    content: z.number(),
    Categories: z.number(),
    Comments: z.number(),
    LikedBys: z.number(),
    Images: z.number(),
    Files: z.number(),
    Tags: z.number()
  }).optional(),
  _sum: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderPost: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderPost: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    ownerId: z.string().nullable(),
    orgId: z.string().nullable(),
    orderPost: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    ownerId: z.string().nullable(),
    orgId: z.string().nullable(),
    orderPost: z.number().int().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable()
  }).nullable().optional()});
import * as z from 'zod';
export const CommentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    numSeq: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    orderComment: z.number(),
    content: z.number(),
    post: z.number(),
    postId: z.number(),
    author: z.number(),
    authorId: z.number(),
    Files: z.number()
  }).optional(),
  _sum: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderComment: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderComment: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderComment: z.number().int().nullable(),
    content: z.string().nullable(),
    postId: z.string().nullable(),
    authorId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderComment: z.number().int().nullable(),
    content: z.string().nullable(),
    postId: z.string().nullable(),
    authorId: z.string().nullable()
  }).nullable().optional()});
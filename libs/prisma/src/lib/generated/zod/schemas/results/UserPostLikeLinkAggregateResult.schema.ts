import * as z from 'zod';
export const UserPostLikeLinkAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    user_id: z.number().optional(),
    post_id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    user_id: z.string().nullable().optional(),
    post_id: z.string().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    user_id: z.string().nullable().optional(),
    post_id: z.string().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional()
  }).nullable().optional()});
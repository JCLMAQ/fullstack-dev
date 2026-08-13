import * as z from 'zod';
export const UserFollowerLinkAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    user_id: z.number().optional(),
    follower_id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _min: z.object({
    user_id: z.string().nullable().optional(),
    follower_id: z.string().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    user_id: z.string().nullable().optional(),
    follower_id: z.string().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional()
  }).nullable().optional()});
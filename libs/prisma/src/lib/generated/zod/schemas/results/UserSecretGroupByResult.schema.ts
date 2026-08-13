import * as z from 'zod';
export const UserSecretGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userId: z.string().optional(),
  pwdHash: z.string().nullable().optional(),
  salt: z.string().nullable().optional(),
  isAdmin: z.boolean().nullable().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    userId: z.number().optional(),
    pwdHash: z.number().optional(),
    salt: z.number().optional(),
    isAdmin: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    userId: z.string().nullable().optional(),
    pwdHash: z.string().nullable().optional(),
    salt: z.string().nullable().optional(),
    isAdmin: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    userId: z.string().nullable().optional(),
    pwdHash: z.string().nullable().optional(),
    salt: z.string().nullable().optional(),
    isAdmin: z.boolean().nullable().optional()
  }).nullable().optional()
}));
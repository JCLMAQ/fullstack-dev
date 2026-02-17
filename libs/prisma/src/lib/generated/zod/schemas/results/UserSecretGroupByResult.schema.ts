import * as z from 'zod';
export const UserSecretGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  pwdHash: z.string(),
  salt: z.string(),
  isAdmin: z.boolean(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    userId: z.number(),
    pwdHash: z.number(),
    salt: z.number(),
    isAdmin: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    pwdHash: z.string().nullable(),
    salt: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    pwdHash: z.string().nullable(),
    salt: z.string().nullable()
  }).nullable().optional()
}));
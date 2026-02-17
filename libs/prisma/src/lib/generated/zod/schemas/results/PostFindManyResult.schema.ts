import * as z from 'zod';
export const PostFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  isPublic: z.boolean(),
  owner: z.unknown(),
  ownerId: z.string(),
  org: z.unknown().optional(),
  orgId: z.string().optional(),
  groups: z.array(z.unknown()),
  orderPost: z.number().int().optional(),
  title: z.string(),
  content: z.string().optional(),
  Categories: z.array(z.unknown()),
  Comments: z.array(z.unknown()),
  LikedBys: z.array(z.unknown()),
  Images: z.array(z.unknown()),
  Files: z.array(z.unknown()),
  Tags: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});
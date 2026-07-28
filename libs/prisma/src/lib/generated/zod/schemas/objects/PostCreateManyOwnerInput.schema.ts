import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  orgId: z.string().optional().nullable(),
  orderPost: z.number().int().optional().nullable(),
  title: z.string(),
  content: z.string().optional().nullable()
}).strict();
export const PostCreateManyOwnerInputObjectSchema: z.ZodType<Prisma.PostCreateManyOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyOwnerInput>;
export const PostCreateManyOwnerInputObjectZodSchema = makeSchema();

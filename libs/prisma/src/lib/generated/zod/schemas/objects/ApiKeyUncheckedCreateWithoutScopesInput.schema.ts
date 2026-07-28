import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  key: z.string(),
  uuid: z.string(),
  userId: z.string()
}).strict();
export const ApiKeyUncheckedCreateWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutScopesInput>;
export const ApiKeyUncheckedCreateWithoutScopesInputObjectZodSchema = makeSchema();

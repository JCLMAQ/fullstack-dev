import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isValidated: z.boolean().optional(),
  emailToken: z.string(),
  timeStamp: z.coerce.date()
}).strict();
export const AccountValidationCreateInputObjectSchema: z.ZodType<Prisma.AccountValidationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationCreateInput>;
export const AccountValidationCreateInputObjectZodSchema = makeSchema();

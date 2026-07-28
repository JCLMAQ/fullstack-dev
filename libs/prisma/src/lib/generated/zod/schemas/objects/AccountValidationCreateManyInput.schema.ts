import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isValidated: z.boolean().optional(),
  emailToken: z.string(),
  timeStamp: z.coerce.date()
}).strict();
export const AccountValidationCreateManyInputObjectSchema: z.ZodType<Prisma.AccountValidationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationCreateManyInput>;
export const AccountValidationCreateManyInputObjectZodSchema = makeSchema();

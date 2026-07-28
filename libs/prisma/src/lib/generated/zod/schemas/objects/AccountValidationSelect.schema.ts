import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  isValidated: z.boolean().optional(),
  emailToken: z.boolean().optional(),
  timeStamp: z.boolean().optional()
}).strict();
export const AccountValidationSelectObjectSchema: z.ZodType<Prisma.AccountValidationSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationSelect>;
export const AccountValidationSelectObjectZodSchema = makeSchema();

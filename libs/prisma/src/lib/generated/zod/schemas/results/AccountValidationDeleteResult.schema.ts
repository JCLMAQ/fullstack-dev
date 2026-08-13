import * as z from 'zod';
export const AccountValidationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  isValidated: z.boolean(),
  emailToken: z.string(),
  timeStamp: z.date()
}));
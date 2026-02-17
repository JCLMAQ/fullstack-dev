import * as z from 'zod';
export const AccountValidationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  numSeq: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.date().optional(),
  isValidated: z.boolean(),
  emailToken: z.string(),
  timeStamp: z.date()
}));
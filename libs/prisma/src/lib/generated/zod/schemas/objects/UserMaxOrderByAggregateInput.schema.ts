import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  nickName: SortOrderSchema.optional(),
  Gender: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  photoUrl: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  hasEmergencyContact: SortOrderSchema.optional(),
  emergencyContactName: SortOrderSchema.optional(),
  emergencyContactPhone: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  jobTitle: SortOrderSchema.optional(),
  isValidated: SortOrderSchema.optional(),
  isSuspended: SortOrderSchema.optional(),
  managerId: SortOrderSchema.optional(),
  isTfaEnable: SortOrderSchema.optional(),
  tfaSecret: SortOrderSchema.optional(),
  passWordFaker: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional()
}).strict();
export const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export const UserMaxOrderByAggregateInputObjectZodSchema = makeSchema();

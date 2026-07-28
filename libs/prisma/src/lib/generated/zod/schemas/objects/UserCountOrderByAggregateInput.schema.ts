import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  social: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  photoUrl: SortOrderSchema.optional(),
  dateOfBirth: SortOrderSchema.optional(),
  hasEmergencyContact: SortOrderSchema.optional(),
  emergencyContactName: SortOrderSchema.optional(),
  emergencyContactPhone: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  preference: SortOrderSchema.optional(),
  jobTitle: SortOrderSchema.optional(),
  isValidated: SortOrderSchema.optional(),
  isSuspended: SortOrderSchema.optional(),
  managerId: SortOrderSchema.optional(),
  Roles: SortOrderSchema.optional(),
  Permissions: SortOrderSchema.optional(),
  isTfaEnable: SortOrderSchema.optional(),
  tfaSecret: SortOrderSchema.optional(),
  passWordFaker: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export const UserCountOrderByAggregateInputObjectZodSchema = makeSchema();

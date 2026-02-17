import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  email: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  title: z.literal(true).optional(),
  nickName: z.literal(true).optional(),
  Gender: z.literal(true).optional(),
  languageId: z.literal(true).optional(),
  photoUrl: z.literal(true).optional(),
  dateOfBirth: z.literal(true).optional(),
  hasEmergencyContact: z.literal(true).optional(),
  emergencyContactName: z.literal(true).optional(),
  emergencyContactPhone: z.literal(true).optional(),
  position: z.literal(true).optional(),
  jobTitle: z.literal(true).optional(),
  isValidated: z.literal(true).optional(),
  isSuspended: z.literal(true).optional(),
  managerId: z.literal(true).optional(),
  isTfaEnable: z.literal(true).optional(),
  tfaSecret: z.literal(true).optional(),
  passWordFaker: z.literal(true).optional(),
  groupId: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserMaxAggregateInputType>;
export const UserMaxAggregateInputObjectZodSchema = makeSchema();

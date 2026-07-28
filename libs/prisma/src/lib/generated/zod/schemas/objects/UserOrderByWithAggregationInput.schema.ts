import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputObjectSchema as UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserAvgOrderByAggregateInputObjectSchema as UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema as UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema as UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';
import { UserSumOrderByAggregateInputObjectSchema as UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  lastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nickName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  social: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  languageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  photoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfBirth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hasEmergencyContact: SortOrderSchema.optional(),
  emergencyContactName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emergencyContactPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  jobTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isValidated: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSuspended: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  managerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Roles: SortOrderSchema.optional(),
  Permissions: SortOrderSchema.optional(),
  isTfaEnable: SortOrderSchema.optional(),
  tfaSecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passWordFaker: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithAggregationInput>;
export const UserOrderByWithAggregationInputObjectZodSchema = makeSchema();

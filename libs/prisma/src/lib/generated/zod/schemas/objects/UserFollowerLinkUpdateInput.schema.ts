import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema).optional(),
  follower: z.lazy(() => UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkUpdateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateInput>;
export const UserFollowerLinkUpdateInputObjectZodSchema = makeSchema();

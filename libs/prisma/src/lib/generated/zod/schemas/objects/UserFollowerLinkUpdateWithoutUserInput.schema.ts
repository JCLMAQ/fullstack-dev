import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  follower: z.lazy(() => UserUpdateOneRequiredWithoutFollowingsNestedInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateWithoutUserInput>;
export const UserFollowerLinkUpdateWithoutUserInputObjectZodSchema = makeSchema();

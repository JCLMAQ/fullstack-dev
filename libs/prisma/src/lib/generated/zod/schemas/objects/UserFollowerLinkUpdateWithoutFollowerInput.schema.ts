import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkUpdateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateWithoutFollowerInput>;
export const UserFollowerLinkUpdateWithoutFollowerInputObjectZodSchema = makeSchema();

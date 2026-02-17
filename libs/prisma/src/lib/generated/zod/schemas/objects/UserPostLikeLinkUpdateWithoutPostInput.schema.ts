import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema as UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPosts_likedNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkUpdateWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateWithoutPostInput>;
export const UserPostLikeLinkUpdateWithoutPostInputObjectZodSchema = makeSchema();

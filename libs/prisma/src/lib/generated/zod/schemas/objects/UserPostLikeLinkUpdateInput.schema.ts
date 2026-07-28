import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema as UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPosts_likedNestedInput.schema';
import { PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema as PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutLikedBysNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkUpdateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateInput>;
export const UserPostLikeLinkUpdateInputObjectZodSchema = makeSchema();

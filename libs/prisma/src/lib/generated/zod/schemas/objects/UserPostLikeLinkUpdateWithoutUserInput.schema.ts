import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema as PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutLikedBysNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutLikedBysNestedInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateWithoutUserInput>;
export const UserPostLikeLinkUpdateWithoutUserInputObjectZodSchema = makeSchema();

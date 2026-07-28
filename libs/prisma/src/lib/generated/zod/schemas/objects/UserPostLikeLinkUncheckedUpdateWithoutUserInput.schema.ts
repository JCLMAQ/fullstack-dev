import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  post_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateWithoutUserInput>;
export const UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();

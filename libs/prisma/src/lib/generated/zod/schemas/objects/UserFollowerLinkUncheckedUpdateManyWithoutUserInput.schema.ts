import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  follower_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UserFollowerLinkUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutUserInput>;
export const UserFollowerLinkUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();

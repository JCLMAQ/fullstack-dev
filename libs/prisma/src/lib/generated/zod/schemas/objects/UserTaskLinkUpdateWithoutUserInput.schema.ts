import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema as TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutUsersNestedInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAssigned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional()
}).strict();
export const UserTaskLinkUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateWithoutUserInput>;
export const UserTaskLinkUpdateWithoutUserInputObjectZodSchema = makeSchema();

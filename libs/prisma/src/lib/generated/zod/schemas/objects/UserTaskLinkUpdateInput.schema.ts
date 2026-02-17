import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema as UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTasksNestedInput.schema';
import { TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema as TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './TaskUpdateOneRequiredWithoutUsersNestedInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAssigned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema).optional(),
  task: z.lazy(() => TaskUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional()
}).strict();
export const UserTaskLinkUpdateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateInput>;
export const UserTaskLinkUpdateInputObjectZodSchema = makeSchema();

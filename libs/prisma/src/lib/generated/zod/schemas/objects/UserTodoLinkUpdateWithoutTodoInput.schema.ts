import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTodoNestedInputObjectSchema as UserUpdateOneRequiredWithoutTodoNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTodoNestedInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAssigned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTodoNestedInputObjectSchema).optional()
}).strict();
export const UserTodoLinkUpdateWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateWithoutTodoInput>;
export const UserTodoLinkUpdateWithoutTodoInputObjectZodSchema = makeSchema();

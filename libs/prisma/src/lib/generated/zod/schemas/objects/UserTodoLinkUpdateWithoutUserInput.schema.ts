import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TodoUpdateOneRequiredWithoutUsersNestedInputObjectSchema as TodoUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './TodoUpdateOneRequiredWithoutUsersNestedInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAssigned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  todo: z.lazy(() => TodoUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional()
}).strict();
export const UserTodoLinkUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateWithoutUserInput>;
export const UserTodoLinkUpdateWithoutUserInputObjectZodSchema = makeSchema();

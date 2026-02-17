import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as UserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutGroupNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutGroupsNestedInput.schema';
import { PostUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema as PostUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutGroupsNestedInput.schema';
import { FileUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema as FileUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutGroupsNestedInput.schema';
import { TagValueUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema as TagValueUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutGroupsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orderGroup: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActiv: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orgId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Members: z.lazy(() => UserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema).optional()
}).strict();
export const GroupUncheckedUpdateWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateWithoutTodosInput>;
export const GroupUncheckedUpdateWithoutTodosInputObjectZodSchema = makeSchema();

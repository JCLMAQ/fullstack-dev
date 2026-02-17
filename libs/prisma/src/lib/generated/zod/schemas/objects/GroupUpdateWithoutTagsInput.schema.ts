import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutGroupsNestedInputObjectSchema as UserUpdateOneRequiredWithoutGroupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutGroupsNestedInput.schema';
import { UserUpdateManyWithoutGroupNestedInputObjectSchema as UserUpdateManyWithoutGroupNestedInputObjectSchema } from './UserUpdateManyWithoutGroupNestedInput.schema';
import { TaskUpdateManyWithoutGroupsNestedInputObjectSchema as TaskUpdateManyWithoutGroupsNestedInputObjectSchema } from './TaskUpdateManyWithoutGroupsNestedInput.schema';
import { TodoUpdateManyWithoutGroupsNestedInputObjectSchema as TodoUpdateManyWithoutGroupsNestedInputObjectSchema } from './TodoUpdateManyWithoutGroupsNestedInput.schema';
import { PostUpdateManyWithoutGroupsNestedInputObjectSchema as PostUpdateManyWithoutGroupsNestedInputObjectSchema } from './PostUpdateManyWithoutGroupsNestedInput.schema';
import { FileUpdateManyWithoutGroupsNestedInputObjectSchema as FileUpdateManyWithoutGroupsNestedInputObjectSchema } from './FileUpdateManyWithoutGroupsNestedInput.schema';
import { OrganizationUpdateOneRequiredWithoutGroupsNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutGroupsNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutGroupsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orderGroup: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActiv: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutGroupsNestedInputObjectSchema).optional(),
  Members: z.lazy(() => UserUpdateManyWithoutGroupNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUpdateManyWithoutGroupsNestedInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationUpdateOneRequiredWithoutGroupsNestedInputObjectSchema).optional()
}).strict();
export const GroupUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithoutTagsInput>;
export const GroupUpdateWithoutTagsInputObjectZodSchema = makeSchema();

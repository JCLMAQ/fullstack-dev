import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { TagValueUncheckedUpdateManyWithoutMainTagNestedInputObjectSchema as TagValueUncheckedUpdateManyWithoutMainTagNestedInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutMainTagNestedInput.schema';
import { TagTranslateUncheckedUpdateManyWithoutTagValueNestedInputObjectSchema as TagTranslateUncheckedUpdateManyWithoutTagValueNestedInputObjectSchema } from './TagTranslateUncheckedUpdateManyWithoutTagValueNestedInput.schema';
import { TodoUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as TodoUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './TodoUncheckedUpdateManyWithoutTagsNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutTagsNestedInput.schema';
import { GroupUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTagsNestedInput.schema';
import { PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutTagsNestedInput.schema';
import { FileUncheckedUpdateManyWithoutTagsNestedInputObjectSchema as FileUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tagCategoriesId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  mainTagId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubTags: z.lazy(() => TagValueUncheckedUpdateManyWithoutMainTagNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedUpdateManyWithoutTagValueNestedInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagValueUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedUpdateInput>;
export const TagValueUncheckedUpdateInputObjectZodSchema = makeSchema();

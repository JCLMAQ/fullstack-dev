import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInputObjectSchema as TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInputObjectSchema } from './TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInput.schema';
import { TagValueUpdateOneWithoutSubTagsNestedInputObjectSchema as TagValueUpdateOneWithoutSubTagsNestedInputObjectSchema } from './TagValueUpdateOneWithoutSubTagsNestedInput.schema';
import { TagValueUpdateManyWithoutMainTagNestedInputObjectSchema as TagValueUpdateManyWithoutMainTagNestedInputObjectSchema } from './TagValueUpdateManyWithoutMainTagNestedInput.schema';
import { TagTranslateUpdateManyWithoutTagValueNestedInputObjectSchema as TagTranslateUpdateManyWithoutTagValueNestedInputObjectSchema } from './TagTranslateUpdateManyWithoutTagValueNestedInput.schema';
import { TodoUpdateManyWithoutTagsNestedInputObjectSchema as TodoUpdateManyWithoutTagsNestedInputObjectSchema } from './TodoUpdateManyWithoutTagsNestedInput.schema';
import { TaskUpdateManyWithoutTagsNestedInputObjectSchema as TaskUpdateManyWithoutTagsNestedInputObjectSchema } from './TaskUpdateManyWithoutTagsNestedInput.schema';
import { GroupUpdateManyWithoutTagsNestedInputObjectSchema as GroupUpdateManyWithoutTagsNestedInputObjectSchema } from './GroupUpdateManyWithoutTagsNestedInput.schema';
import { FileUpdateManyWithoutTagsNestedInputObjectSchema as FileUpdateManyWithoutTagsNestedInputObjectSchema } from './FileUpdateManyWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagCategories: z.lazy(() => TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInputObjectSchema).optional(),
  mainTag: z.lazy(() => TagValueUpdateOneWithoutSubTagsNestedInputObjectSchema).optional(),
  SubTags: z.lazy(() => TagValueUpdateManyWithoutMainTagNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUpdateManyWithoutTagValueNestedInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUpdateManyWithoutTagsNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUpdateManyWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const TagValueUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithoutPostsInput>;
export const TagValueUpdateWithoutPostsInputObjectZodSchema = makeSchema();

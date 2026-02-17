import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { GroupUncheckedUpdateManyWithoutPostsNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutPostsNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutPostsNestedInput.schema';
import { CategoryUncheckedUpdateManyWithoutPostsNestedInputObjectSchema as CategoryUncheckedUpdateManyWithoutPostsNestedInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutPostsNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutPostNestedInput.schema';
import { ImageUncheckedUpdateManyWithoutPostNestedInputObjectSchema as ImageUncheckedUpdateManyWithoutPostNestedInputObjectSchema } from './ImageUncheckedUpdateManyWithoutPostNestedInput.schema';
import { FileUncheckedUpdateManyWithoutPostNestedInputObjectSchema as FileUncheckedUpdateManyWithoutPostNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutPostNestedInput.schema';
import { TagValueUncheckedUpdateManyWithoutPostsNestedInputObjectSchema as TagValueUncheckedUpdateManyWithoutPostsNestedInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutPostsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  orgId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orderPost: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutPostsNestedInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutPostsNestedInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUncheckedUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedUpdateManyWithoutPostsNestedInputObjectSchema).optional()
}).strict();
export const PostUncheckedUpdateWithoutLikedBysInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutLikedBysInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateWithoutLikedBysInput>;
export const PostUncheckedUpdateWithoutLikedBysInputObjectZodSchema = makeSchema();

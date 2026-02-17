import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema as UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPostsNestedInput.schema';
import { OrganizationUpdateOneWithoutPostsNestedInputObjectSchema as OrganizationUpdateOneWithoutPostsNestedInputObjectSchema } from './OrganizationUpdateOneWithoutPostsNestedInput.schema';
import { CategoryUpdateManyWithoutPostsNestedInputObjectSchema as CategoryUpdateManyWithoutPostsNestedInputObjectSchema } from './CategoryUpdateManyWithoutPostsNestedInput.schema';
import { CommentUpdateManyWithoutPostNestedInputObjectSchema as CommentUpdateManyWithoutPostNestedInputObjectSchema } from './CommentUpdateManyWithoutPostNestedInput.schema';
import { UserPostLikeLinkUpdateManyWithoutPostNestedInputObjectSchema as UserPostLikeLinkUpdateManyWithoutPostNestedInputObjectSchema } from './UserPostLikeLinkUpdateManyWithoutPostNestedInput.schema';
import { ImageUpdateManyWithoutPostNestedInputObjectSchema as ImageUpdateManyWithoutPostNestedInputObjectSchema } from './ImageUpdateManyWithoutPostNestedInput.schema';
import { FileUpdateManyWithoutPostNestedInputObjectSchema as FileUpdateManyWithoutPostNestedInputObjectSchema } from './FileUpdateManyWithoutPostNestedInput.schema';
import { TagValueUpdateManyWithoutPostsNestedInputObjectSchema as TagValueUpdateManyWithoutPostsNestedInputObjectSchema } from './TagValueUpdateManyWithoutPostsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  orderPost: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationUpdateOneWithoutPostsNestedInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryUpdateManyWithoutPostsNestedInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUpdateManyWithoutPostsNestedInputObjectSchema).optional()
}).strict();
export const PostUpdateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostUpdateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithoutGroupsInput>;
export const PostUpdateWithoutGroupsInputObjectZodSchema = makeSchema();

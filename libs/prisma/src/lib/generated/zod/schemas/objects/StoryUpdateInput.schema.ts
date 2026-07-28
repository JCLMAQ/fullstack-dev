import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutStoriesNestedInputObjectSchema as UserUpdateOneRequiredWithoutStoriesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutStoriesNestedInput.schema';
import { ImageUpdateManyWithoutStoryNestedInputObjectSchema as ImageUpdateManyWithoutStoryNestedInputObjectSchema } from './ImageUpdateManyWithoutStoryNestedInput.schema';
import { FileUpdateManyWithoutStoryNestedInputObjectSchema as FileUpdateManyWithoutStoryNestedInputObjectSchema } from './FileUpdateManyWithoutStoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeleted: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  caption: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStoriesNestedInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUpdateManyWithoutStoryNestedInputObjectSchema).optional(),
  Files: z.lazy(() => FileUpdateManyWithoutStoryNestedInputObjectSchema).optional()
}).strict();
export const StoryUpdateInputObjectSchema: z.ZodType<Prisma.StoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateInput>;
export const StoryUpdateInputObjectZodSchema = makeSchema();

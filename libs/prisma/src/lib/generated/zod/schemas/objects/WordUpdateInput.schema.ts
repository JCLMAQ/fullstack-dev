import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { EnumDictioEntryTypeFieldUpdateOperationsInputObjectSchema as EnumDictioEntryTypeFieldUpdateOperationsInputObjectSchema } from './EnumDictioEntryTypeFieldUpdateOperationsInput.schema';
import { TranslationUpdateManyWithoutWordNestedInputObjectSchema as TranslationUpdateManyWithoutWordNestedInputObjectSchema } from './TranslationUpdateManyWithoutWordNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeleted: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([DictioEntryTypeSchema, z.lazy(() => EnumDictioEntryTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUpdateManyWithoutWordNestedInputObjectSchema).optional()
}).strict();
export const WordUpdateInputObjectSchema: z.ZodType<Prisma.WordUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUpdateInput>;
export const WordUpdateInputObjectZodSchema = makeSchema();

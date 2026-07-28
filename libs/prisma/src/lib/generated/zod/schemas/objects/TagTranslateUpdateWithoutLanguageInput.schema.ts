import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TagValueUpdateOneRequiredWithoutTagTranslatesNestedInputObjectSchema as TagValueUpdateOneRequiredWithoutTagTranslatesNestedInputObjectSchema } from './TagValueUpdateOneRequiredWithoutTagTranslatesNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  translation: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tagValue: z.lazy(() => TagValueUpdateOneRequiredWithoutTagTranslatesNestedInputObjectSchema).optional()
}).strict();
export const TagTranslateUpdateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateUpdateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUpdateWithoutLanguageInput>;
export const TagTranslateUpdateWithoutLanguageInputObjectZodSchema = makeSchema();

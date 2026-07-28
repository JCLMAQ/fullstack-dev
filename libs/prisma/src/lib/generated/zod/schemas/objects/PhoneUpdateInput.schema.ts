import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { NullableEnumPhoneTypeFieldUpdateOperationsInputObjectSchema as NullableEnumPhoneTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumPhoneTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPhonesNestedInputObjectSchema as UserUpdateOneRequiredWithoutPhonesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPhonesNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  countryCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  countryIso: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  extension: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phoneType: z.union([PhoneTypeSchema, z.lazy(() => NullableEnumPhoneTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPhonesNestedInputObjectSchema).optional()
}).strict();
export const PhoneUpdateInputObjectSchema: z.ZodType<Prisma.PhoneUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUpdateInput>;
export const PhoneUpdateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema'

const makeSchema = () => z.object({
  set: PhoneTypeSchema.optional()
}).strict();
export const NullableEnumPhoneTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumPhoneTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumPhoneTypeFieldUpdateOperationsInput>;
export const NullableEnumPhoneTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { AddressTypeSchema } from '../enums/AddressType.schema'

const makeSchema = () => z.object({
  set: AddressTypeSchema.optional()
}).strict();
export const NullableEnumAddressTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumAddressTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumAddressTypeFieldUpdateOperationsInput>;
export const NullableEnumAddressTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();

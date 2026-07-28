import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TitleSchema } from '../enums/Title.schema'

const makeSchema = () => z.object({
  set: TitleSchema.optional()
}).strict();
export const NullableEnumTitleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumTitleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumTitleFieldUpdateOperationsInput>;
export const NullableEnumTitleFieldUpdateOperationsInputObjectZodSchema = makeSchema();

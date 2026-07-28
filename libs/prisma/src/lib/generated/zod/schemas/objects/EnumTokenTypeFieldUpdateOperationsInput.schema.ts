import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TokenTypeSchema } from '../enums/TokenType.schema'

const makeSchema = () => z.object({
  set: TokenTypeSchema.optional()
}).strict();
export const EnumTokenTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTokenTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTokenTypeFieldUpdateOperationsInput>;
export const EnumTokenTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();

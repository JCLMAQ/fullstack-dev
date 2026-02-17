import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema'

const makeSchema = () => z.object({
  set: DictioEntryTypeSchema.optional()
}).strict();
export const EnumDictioEntryTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDictioEntryTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDictioEntryTypeFieldUpdateOperationsInput>;
export const EnumDictioEntryTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PositionSchema } from '../enums/Position.schema'

const makeSchema = () => z.object({
  set: PositionSchema.optional()
}).strict();
export const NullableEnumPositionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumPositionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumPositionFieldUpdateOperationsInput>;
export const NullableEnumPositionFieldUpdateOperationsInputObjectZodSchema = makeSchema();

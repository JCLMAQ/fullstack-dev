import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LanguageUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LanguageUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateManyMutationInput>;
export const LanguageUpdateManyMutationInputObjectZodSchema = makeSchema();

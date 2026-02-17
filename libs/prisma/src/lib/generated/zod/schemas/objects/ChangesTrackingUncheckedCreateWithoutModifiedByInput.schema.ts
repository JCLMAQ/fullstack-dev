import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  doneAt: z.coerce.date().optional(),
  modelName: z.string(),
  recordId: z.string(),
  operation: z.string(),
  newData: z.union([JsonNullValueInputSchema, jsonSchema]),
  oldData: z.union([JsonNullValueInputSchema, jsonSchema])
}).strict();
export const ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUncheckedCreateWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUncheckedCreateWithoutModifiedByInput>;
export const ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectZodSchema = makeSchema();

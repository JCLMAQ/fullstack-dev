import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
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
export const ChangesTrackingCreateWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingCreateWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingCreateWithoutModifiedByInput>;
export const ChangesTrackingCreateWithoutModifiedByInputObjectZodSchema = makeSchema();

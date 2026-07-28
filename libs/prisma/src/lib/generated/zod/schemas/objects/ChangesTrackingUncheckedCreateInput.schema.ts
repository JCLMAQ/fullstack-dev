import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  doneAt: z.coerce.date().optional(),
  modifiedById: z.string(),
  modelName: z.string(),
  recordId: z.string(),
  operation: z.string(),
  newData: z.union([JsonNullValueInputSchema, jsonSchema]),
  oldData: z.union([JsonNullValueInputSchema, jsonSchema])
}).strict();
export const ChangesTrackingUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUncheckedCreateInput>;
export const ChangesTrackingUncheckedCreateInputObjectZodSchema = makeSchema();

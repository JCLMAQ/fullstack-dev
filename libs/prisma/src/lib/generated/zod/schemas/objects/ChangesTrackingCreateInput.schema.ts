import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutChangesLogsInputObjectSchema as UserCreateNestedOneWithoutChangesLogsInputObjectSchema } from './UserCreateNestedOneWithoutChangesLogsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  doneAt: z.coerce.date().optional(),
  modelName: z.string(),
  recordId: z.string(),
  operation: z.string(),
  newData: z.union([JsonNullValueInputSchema, jsonSchema]),
  oldData: z.union([JsonNullValueInputSchema, jsonSchema]),
  modifiedBy: z.lazy(() => UserCreateNestedOneWithoutChangesLogsInputObjectSchema)
}).strict();
export const ChangesTrackingCreateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingCreateInput>;
export const ChangesTrackingCreateInputObjectZodSchema = makeSchema();

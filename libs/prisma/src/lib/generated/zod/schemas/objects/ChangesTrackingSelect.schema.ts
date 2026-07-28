import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  doneAt: z.boolean().optional(),
  modifiedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  modifiedById: z.boolean().optional(),
  modelName: z.boolean().optional(),
  recordId: z.boolean().optional(),
  operation: z.boolean().optional(),
  newData: z.boolean().optional(),
  oldData: z.boolean().optional()
}).strict();
export const ChangesTrackingSelectObjectSchema: z.ZodType<Prisma.ChangesTrackingSelect> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingSelect>;
export const ChangesTrackingSelectObjectZodSchema = makeSchema();

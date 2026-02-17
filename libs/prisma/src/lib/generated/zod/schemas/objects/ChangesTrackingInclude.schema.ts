import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  modifiedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ChangesTrackingIncludeObjectSchema: z.ZodType<Prisma.ChangesTrackingInclude> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingInclude>;
export const ChangesTrackingIncludeObjectZodSchema = makeSchema();

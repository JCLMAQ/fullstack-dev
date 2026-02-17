import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './ChangesTrackingWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ChangesTrackingWhereInputObjectSchema).optional(),
  some: z.lazy(() => ChangesTrackingWhereInputObjectSchema).optional(),
  none: z.lazy(() => ChangesTrackingWhereInputObjectSchema).optional()
}).strict();
export const ChangesTrackingListRelationFilterObjectSchema: z.ZodType<Prisma.ChangesTrackingListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingListRelationFilter>;
export const ChangesTrackingListRelationFilterObjectZodSchema = makeSchema();

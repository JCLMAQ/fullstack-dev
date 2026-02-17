import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './PhoneWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PhoneWhereInputObjectSchema).optional(),
  some: z.lazy(() => PhoneWhereInputObjectSchema).optional(),
  none: z.lazy(() => PhoneWhereInputObjectSchema).optional()
}).strict();
export const PhoneListRelationFilterObjectSchema: z.ZodType<Prisma.PhoneListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PhoneListRelationFilter>;
export const PhoneListRelationFilterObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileListRelationFilterObjectSchema: z.ZodType<Prisma.ProfileListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProfileListRelationFilter>;
export const ProfileListRelationFilterObjectZodSchema = makeSchema();

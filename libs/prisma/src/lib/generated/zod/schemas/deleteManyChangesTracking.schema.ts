import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './objects/ChangesTrackingWhereInput.schema';

export const ChangesTrackingDeleteManySchema: z.ZodType<Prisma.ChangesTrackingDeleteManyArgs> = z.object({ where: ChangesTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingDeleteManyArgs>;

export const ChangesTrackingDeleteManyZodSchema = z.object({ where: ChangesTrackingWhereInputObjectSchema.optional() }).strict();
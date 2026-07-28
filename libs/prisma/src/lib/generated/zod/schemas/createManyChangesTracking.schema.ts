import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingCreateManyInputObjectSchema as ChangesTrackingCreateManyInputObjectSchema } from './objects/ChangesTrackingCreateManyInput.schema';

export const ChangesTrackingCreateManySchema: z.ZodType<Prisma.ChangesTrackingCreateManyArgs> = z.object({ data: z.union([ ChangesTrackingCreateManyInputObjectSchema, z.array(ChangesTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingCreateManyArgs>;

export const ChangesTrackingCreateManyZodSchema = z.object({ data: z.union([ ChangesTrackingCreateManyInputObjectSchema, z.array(ChangesTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
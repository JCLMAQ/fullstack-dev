import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingCreateManyInputObjectSchema as ChangesTrackingCreateManyInputObjectSchema } from './objects/ChangesTrackingCreateManyInput.schema';

export const ChangesTrackingCreateManyAndReturnSchema: z.ZodType<Prisma.ChangesTrackingCreateManyAndReturnArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), data: z.union([ ChangesTrackingCreateManyInputObjectSchema, z.array(ChangesTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingCreateManyAndReturnArgs>;

export const ChangesTrackingCreateManyAndReturnZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), data: z.union([ ChangesTrackingCreateManyInputObjectSchema, z.array(ChangesTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
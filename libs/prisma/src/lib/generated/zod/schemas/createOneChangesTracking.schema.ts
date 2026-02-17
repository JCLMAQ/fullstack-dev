import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingCreateInputObjectSchema as ChangesTrackingCreateInputObjectSchema } from './objects/ChangesTrackingCreateInput.schema';
import { ChangesTrackingUncheckedCreateInputObjectSchema as ChangesTrackingUncheckedCreateInputObjectSchema } from './objects/ChangesTrackingUncheckedCreateInput.schema';

export const ChangesTrackingCreateOneSchema: z.ZodType<Prisma.ChangesTrackingCreateArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), data: z.union([ChangesTrackingCreateInputObjectSchema, ChangesTrackingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingCreateArgs>;

export const ChangesTrackingCreateOneZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), data: z.union([ChangesTrackingCreateInputObjectSchema, ChangesTrackingUncheckedCreateInputObjectSchema]) }).strict();
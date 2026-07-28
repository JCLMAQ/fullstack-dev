import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingCreateInputObjectSchema as ChangesTrackingCreateInputObjectSchema } from './objects/ChangesTrackingCreateInput.schema';
import { ChangesTrackingUncheckedCreateInputObjectSchema as ChangesTrackingUncheckedCreateInputObjectSchema } from './objects/ChangesTrackingUncheckedCreateInput.schema';
import { ChangesTrackingUpdateInputObjectSchema as ChangesTrackingUpdateInputObjectSchema } from './objects/ChangesTrackingUpdateInput.schema';
import { ChangesTrackingUncheckedUpdateInputObjectSchema as ChangesTrackingUncheckedUpdateInputObjectSchema } from './objects/ChangesTrackingUncheckedUpdateInput.schema';

export const ChangesTrackingUpsertOneSchema: z.ZodType<Prisma.ChangesTrackingUpsertArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema, create: z.union([ ChangesTrackingCreateInputObjectSchema, ChangesTrackingUncheckedCreateInputObjectSchema ]), update: z.union([ ChangesTrackingUpdateInputObjectSchema, ChangesTrackingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingUpsertArgs>;

export const ChangesTrackingUpsertOneZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema, create: z.union([ ChangesTrackingCreateInputObjectSchema, ChangesTrackingUncheckedCreateInputObjectSchema ]), update: z.union([ ChangesTrackingUpdateInputObjectSchema, ChangesTrackingUncheckedUpdateInputObjectSchema ]) }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingUpdateInputObjectSchema as ChangesTrackingUpdateInputObjectSchema } from './objects/ChangesTrackingUpdateInput.schema';
import { ChangesTrackingUncheckedUpdateInputObjectSchema as ChangesTrackingUncheckedUpdateInputObjectSchema } from './objects/ChangesTrackingUncheckedUpdateInput.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';

export const ChangesTrackingUpdateOneSchema: z.ZodType<Prisma.ChangesTrackingUpdateArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), data: z.union([ChangesTrackingUpdateInputObjectSchema, ChangesTrackingUncheckedUpdateInputObjectSchema]), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateArgs>;

export const ChangesTrackingUpdateOneZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), data: z.union([ChangesTrackingUpdateInputObjectSchema, ChangesTrackingUncheckedUpdateInputObjectSchema]), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict();
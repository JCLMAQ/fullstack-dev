import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';

export const ChangesTrackingDeleteOneSchema: z.ZodType<Prisma.ChangesTrackingDeleteArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingDeleteArgs>;

export const ChangesTrackingDeleteOneZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict();
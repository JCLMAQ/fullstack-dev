import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';

export const ChangesTrackingFindUniqueOrThrowSchema: z.ZodType<Prisma.ChangesTrackingFindUniqueOrThrowArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingFindUniqueOrThrowArgs>;

export const ChangesTrackingFindUniqueOrThrowZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict();
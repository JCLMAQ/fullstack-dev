import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';

export const ChangesTrackingFindUniqueSchema: z.ZodType<Prisma.ChangesTrackingFindUniqueArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingFindUniqueArgs>;

export const ChangesTrackingFindUniqueZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), include: ChangesTrackingIncludeObjectSchema.optional(), where: ChangesTrackingWhereUniqueInputObjectSchema }).strict();
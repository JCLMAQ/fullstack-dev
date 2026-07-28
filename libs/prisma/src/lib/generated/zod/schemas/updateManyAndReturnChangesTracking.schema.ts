import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingSelectObjectSchema as ChangesTrackingSelectObjectSchema } from './objects/ChangesTrackingSelect.schema';
import { ChangesTrackingUpdateManyMutationInputObjectSchema as ChangesTrackingUpdateManyMutationInputObjectSchema } from './objects/ChangesTrackingUpdateManyMutationInput.schema';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './objects/ChangesTrackingWhereInput.schema';

export const ChangesTrackingUpdateManyAndReturnSchema: z.ZodType<Prisma.ChangesTrackingUpdateManyAndReturnArgs> = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), data: ChangesTrackingUpdateManyMutationInputObjectSchema, where: ChangesTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateManyAndReturnArgs>;

export const ChangesTrackingUpdateManyAndReturnZodSchema = z.object({ select: ChangesTrackingSelectObjectSchema.optional(), data: ChangesTrackingUpdateManyMutationInputObjectSchema, where: ChangesTrackingWhereInputObjectSchema.optional() }).strict();
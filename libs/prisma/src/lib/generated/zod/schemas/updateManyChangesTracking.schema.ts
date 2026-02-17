import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingUpdateManyMutationInputObjectSchema as ChangesTrackingUpdateManyMutationInputObjectSchema } from './objects/ChangesTrackingUpdateManyMutationInput.schema';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './objects/ChangesTrackingWhereInput.schema';

export const ChangesTrackingUpdateManySchema: z.ZodType<Prisma.ChangesTrackingUpdateManyArgs> = z.object({ data: ChangesTrackingUpdateManyMutationInputObjectSchema, where: ChangesTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateManyArgs>;

export const ChangesTrackingUpdateManyZodSchema = z.object({ data: ChangesTrackingUpdateManyMutationInputObjectSchema, where: ChangesTrackingWhereInputObjectSchema.optional() }).strict();
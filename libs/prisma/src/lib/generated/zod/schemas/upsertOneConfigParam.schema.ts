import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';
import { ConfigParamCreateInputObjectSchema as ConfigParamCreateInputObjectSchema } from './objects/ConfigParamCreateInput.schema';
import { ConfigParamUncheckedCreateInputObjectSchema as ConfigParamUncheckedCreateInputObjectSchema } from './objects/ConfigParamUncheckedCreateInput.schema';
import { ConfigParamUpdateInputObjectSchema as ConfigParamUpdateInputObjectSchema } from './objects/ConfigParamUpdateInput.schema';
import { ConfigParamUncheckedUpdateInputObjectSchema as ConfigParamUncheckedUpdateInputObjectSchema } from './objects/ConfigParamUncheckedUpdateInput.schema';

export const ConfigParamUpsertOneSchema: z.ZodType<Prisma.ConfigParamUpsertArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema, create: z.union([ ConfigParamCreateInputObjectSchema, ConfigParamUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigParamUpdateInputObjectSchema, ConfigParamUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ConfigParamUpsertArgs>;

export const ConfigParamUpsertOneZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema, create: z.union([ ConfigParamCreateInputObjectSchema, ConfigParamUncheckedCreateInputObjectSchema ]), update: z.union([ ConfigParamUpdateInputObjectSchema, ConfigParamUncheckedUpdateInputObjectSchema ]) }).strict();
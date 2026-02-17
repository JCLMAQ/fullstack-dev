import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamUpdateInputObjectSchema as ConfigParamUpdateInputObjectSchema } from './objects/ConfigParamUpdateInput.schema';
import { ConfigParamUncheckedUpdateInputObjectSchema as ConfigParamUncheckedUpdateInputObjectSchema } from './objects/ConfigParamUncheckedUpdateInput.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';

export const ConfigParamUpdateOneSchema: z.ZodType<Prisma.ConfigParamUpdateArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  data: z.union([ConfigParamUpdateInputObjectSchema, ConfigParamUncheckedUpdateInputObjectSchema]), where: ConfigParamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigParamUpdateArgs>;

export const ConfigParamUpdateOneZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  data: z.union([ConfigParamUpdateInputObjectSchema, ConfigParamUncheckedUpdateInputObjectSchema]), where: ConfigParamWhereUniqueInputObjectSchema }).strict();
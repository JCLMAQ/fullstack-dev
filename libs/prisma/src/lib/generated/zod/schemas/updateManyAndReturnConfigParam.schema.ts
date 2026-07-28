import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamUpdateManyMutationInputObjectSchema as ConfigParamUpdateManyMutationInputObjectSchema } from './objects/ConfigParamUpdateManyMutationInput.schema';
import { ConfigParamWhereInputObjectSchema as ConfigParamWhereInputObjectSchema } from './objects/ConfigParamWhereInput.schema';

export const ConfigParamUpdateManyAndReturnSchema: z.ZodType<Prisma.ConfigParamUpdateManyAndReturnArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(), data: ConfigParamUpdateManyMutationInputObjectSchema, where: ConfigParamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamUpdateManyAndReturnArgs>;

export const ConfigParamUpdateManyAndReturnZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(), data: ConfigParamUpdateManyMutationInputObjectSchema, where: ConfigParamWhereInputObjectSchema.optional() }).strict();
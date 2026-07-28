import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ConfigParamUpdateManyMutationInputObjectSchema as ConfigParamUpdateManyMutationInputObjectSchema } from './objects/ConfigParamUpdateManyMutationInput.schema';
import { ConfigParamWhereInputObjectSchema as ConfigParamWhereInputObjectSchema } from './objects/ConfigParamWhereInput.schema';

export const ConfigParamUpdateManySchema: z.ZodType<Prisma.ConfigParamUpdateManyArgs> = z.object({ data: ConfigParamUpdateManyMutationInputObjectSchema, where: ConfigParamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamUpdateManyArgs>;

export const ConfigParamUpdateManyZodSchema = z.object({ data: ConfigParamUpdateManyMutationInputObjectSchema, where: ConfigParamWhereInputObjectSchema.optional() }).strict();
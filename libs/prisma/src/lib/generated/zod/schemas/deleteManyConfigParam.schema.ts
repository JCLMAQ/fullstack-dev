import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ConfigParamWhereInputObjectSchema as ConfigParamWhereInputObjectSchema } from './objects/ConfigParamWhereInput.schema';

export const ConfigParamDeleteManySchema: z.ZodType<Prisma.ConfigParamDeleteManyArgs> = z.object({ where: ConfigParamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamDeleteManyArgs>;

export const ConfigParamDeleteManyZodSchema = z.object({ where: ConfigParamWhereInputObjectSchema.optional() }).strict();
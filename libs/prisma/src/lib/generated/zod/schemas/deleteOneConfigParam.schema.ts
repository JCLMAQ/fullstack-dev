import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';

export const ConfigParamDeleteOneSchema: z.ZodType<Prisma.ConfigParamDeleteArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigParamDeleteArgs>;

export const ConfigParamDeleteOneZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict();
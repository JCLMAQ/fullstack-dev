import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';

export const ConfigParamFindUniqueSchema: z.ZodType<Prisma.ConfigParamFindUniqueArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigParamFindUniqueArgs>;

export const ConfigParamFindUniqueZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';

export const ConfigParamFindUniqueOrThrowSchema: z.ZodType<Prisma.ConfigParamFindUniqueOrThrowArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ConfigParamFindUniqueOrThrowArgs>;

export const ConfigParamFindUniqueOrThrowZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  where: ConfigParamWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamCreateManyInputObjectSchema as ConfigParamCreateManyInputObjectSchema } from './objects/ConfigParamCreateManyInput.schema';

export const ConfigParamCreateManyAndReturnSchema: z.ZodType<Prisma.ConfigParamCreateManyAndReturnArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(), data: z.union([ ConfigParamCreateManyInputObjectSchema, z.array(ConfigParamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamCreateManyAndReturnArgs>;

export const ConfigParamCreateManyAndReturnZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(), data: z.union([ ConfigParamCreateManyInputObjectSchema, z.array(ConfigParamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
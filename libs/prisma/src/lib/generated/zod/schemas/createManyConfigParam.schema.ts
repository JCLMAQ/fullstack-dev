import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamCreateManyInputObjectSchema as ConfigParamCreateManyInputObjectSchema } from './objects/ConfigParamCreateManyInput.schema';

export const ConfigParamCreateManySchema: z.ZodType<Prisma.ConfigParamCreateManyArgs> = z.object({ data: z.union([ ConfigParamCreateManyInputObjectSchema, z.array(ConfigParamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamCreateManyArgs>;

export const ConfigParamCreateManyZodSchema = z.object({ data: z.union([ ConfigParamCreateManyInputObjectSchema, z.array(ConfigParamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
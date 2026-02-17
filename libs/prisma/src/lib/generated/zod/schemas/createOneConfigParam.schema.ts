import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamSelectObjectSchema as ConfigParamSelectObjectSchema } from './objects/ConfigParamSelect.schema';
import { ConfigParamCreateInputObjectSchema as ConfigParamCreateInputObjectSchema } from './objects/ConfigParamCreateInput.schema';
import { ConfigParamUncheckedCreateInputObjectSchema as ConfigParamUncheckedCreateInputObjectSchema } from './objects/ConfigParamUncheckedCreateInput.schema';

export const ConfigParamCreateOneSchema: z.ZodType<Prisma.ConfigParamCreateArgs> = z.object({ select: ConfigParamSelectObjectSchema.optional(),  data: z.union([ConfigParamCreateInputObjectSchema, ConfigParamUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ConfigParamCreateArgs>;

export const ConfigParamCreateOneZodSchema = z.object({ select: ConfigParamSelectObjectSchema.optional(),  data: z.union([ConfigParamCreateInputObjectSchema, ConfigParamUncheckedCreateInputObjectSchema]) }).strict();
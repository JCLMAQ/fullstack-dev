import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainCreateInputObjectSchema as AppEmailDomainCreateInputObjectSchema } from './objects/AppEmailDomainCreateInput.schema';
import { AppEmailDomainUncheckedCreateInputObjectSchema as AppEmailDomainUncheckedCreateInputObjectSchema } from './objects/AppEmailDomainUncheckedCreateInput.schema';

export const AppEmailDomainCreateOneSchema: z.ZodType<Prisma.AppEmailDomainCreateArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  data: z.union([AppEmailDomainCreateInputObjectSchema, AppEmailDomainUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainCreateArgs>;

export const AppEmailDomainCreateOneZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  data: z.union([AppEmailDomainCreateInputObjectSchema, AppEmailDomainUncheckedCreateInputObjectSchema]) }).strict();
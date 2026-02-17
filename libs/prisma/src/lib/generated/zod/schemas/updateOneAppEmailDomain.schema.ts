import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainUpdateInputObjectSchema as AppEmailDomainUpdateInputObjectSchema } from './objects/AppEmailDomainUpdateInput.schema';
import { AppEmailDomainUncheckedUpdateInputObjectSchema as AppEmailDomainUncheckedUpdateInputObjectSchema } from './objects/AppEmailDomainUncheckedUpdateInput.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';

export const AppEmailDomainUpdateOneSchema: z.ZodType<Prisma.AppEmailDomainUpdateArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  data: z.union([AppEmailDomainUpdateInputObjectSchema, AppEmailDomainUncheckedUpdateInputObjectSchema]), where: AppEmailDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainUpdateArgs>;

export const AppEmailDomainUpdateOneZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  data: z.union([AppEmailDomainUpdateInputObjectSchema, AppEmailDomainUncheckedUpdateInputObjectSchema]), where: AppEmailDomainWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AppEmailDomainWhereInputObjectSchema as AppEmailDomainWhereInputObjectSchema } from './objects/AppEmailDomainWhereInput.schema';

export const AppEmailDomainDeleteManySchema: z.ZodType<Prisma.AppEmailDomainDeleteManyArgs> = z.object({ where: AppEmailDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainDeleteManyArgs>;

export const AppEmailDomainDeleteManyZodSchema = z.object({ where: AppEmailDomainWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainUpdateManyMutationInputObjectSchema as AppEmailDomainUpdateManyMutationInputObjectSchema } from './objects/AppEmailDomainUpdateManyMutationInput.schema';
import { AppEmailDomainWhereInputObjectSchema as AppEmailDomainWhereInputObjectSchema } from './objects/AppEmailDomainWhereInput.schema';

export const AppEmailDomainUpdateManySchema: z.ZodType<Prisma.AppEmailDomainUpdateManyArgs> = z.object({ data: AppEmailDomainUpdateManyMutationInputObjectSchema, where: AppEmailDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainUpdateManyArgs>;

export const AppEmailDomainUpdateManyZodSchema = z.object({ data: AppEmailDomainUpdateManyMutationInputObjectSchema, where: AppEmailDomainWhereInputObjectSchema.optional() }).strict();
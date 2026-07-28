import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainUpdateManyMutationInputObjectSchema as AppEmailDomainUpdateManyMutationInputObjectSchema } from './objects/AppEmailDomainUpdateManyMutationInput.schema';
import { AppEmailDomainWhereInputObjectSchema as AppEmailDomainWhereInputObjectSchema } from './objects/AppEmailDomainWhereInput.schema';

export const AppEmailDomainUpdateManyAndReturnSchema: z.ZodType<Prisma.AppEmailDomainUpdateManyAndReturnArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(), data: AppEmailDomainUpdateManyMutationInputObjectSchema, where: AppEmailDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainUpdateManyAndReturnArgs>;

export const AppEmailDomainUpdateManyAndReturnZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(), data: AppEmailDomainUpdateManyMutationInputObjectSchema, where: AppEmailDomainWhereInputObjectSchema.optional() }).strict();
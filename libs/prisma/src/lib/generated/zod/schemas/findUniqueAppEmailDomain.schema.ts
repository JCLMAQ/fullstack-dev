import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';

export const AppEmailDomainFindUniqueSchema: z.ZodType<Prisma.AppEmailDomainFindUniqueArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainFindUniqueArgs>;

export const AppEmailDomainFindUniqueZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema }).strict();
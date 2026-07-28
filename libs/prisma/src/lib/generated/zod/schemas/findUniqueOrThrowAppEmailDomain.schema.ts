import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';

export const AppEmailDomainFindUniqueOrThrowSchema: z.ZodType<Prisma.AppEmailDomainFindUniqueOrThrowArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainFindUniqueOrThrowArgs>;

export const AppEmailDomainFindUniqueOrThrowZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(),  where: AppEmailDomainWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainSelectObjectSchema as AppEmailDomainSelectObjectSchema } from './objects/AppEmailDomainSelect.schema';
import { AppEmailDomainCreateManyInputObjectSchema as AppEmailDomainCreateManyInputObjectSchema } from './objects/AppEmailDomainCreateManyInput.schema';

export const AppEmailDomainCreateManyAndReturnSchema: z.ZodType<Prisma.AppEmailDomainCreateManyAndReturnArgs> = z.object({ select: AppEmailDomainSelectObjectSchema.optional(), data: z.union([ AppEmailDomainCreateManyInputObjectSchema, z.array(AppEmailDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainCreateManyAndReturnArgs>;

export const AppEmailDomainCreateManyAndReturnZodSchema = z.object({ select: AppEmailDomainSelectObjectSchema.optional(), data: z.union([ AppEmailDomainCreateManyInputObjectSchema, z.array(AppEmailDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
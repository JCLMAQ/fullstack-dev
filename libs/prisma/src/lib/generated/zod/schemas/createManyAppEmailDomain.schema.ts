import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainCreateManyInputObjectSchema as AppEmailDomainCreateManyInputObjectSchema } from './objects/AppEmailDomainCreateManyInput.schema';

export const AppEmailDomainCreateManySchema: z.ZodType<Prisma.AppEmailDomainCreateManyArgs> = z.object({ data: z.union([ AppEmailDomainCreateManyInputObjectSchema, z.array(AppEmailDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainCreateManyArgs>;

export const AppEmailDomainCreateManyZodSchema = z.object({ data: z.union([ AppEmailDomainCreateManyInputObjectSchema, z.array(AppEmailDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
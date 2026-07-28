import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainCreateManyInputObjectSchema as OrgDomainCreateManyInputObjectSchema } from './objects/OrgDomainCreateManyInput.schema';

export const OrgDomainCreateManySchema: z.ZodType<Prisma.OrgDomainCreateManyArgs> = z.object({ data: z.union([ OrgDomainCreateManyInputObjectSchema, z.array(OrgDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainCreateManyArgs>;

export const OrgDomainCreateManyZodSchema = z.object({ data: z.union([ OrgDomainCreateManyInputObjectSchema, z.array(OrgDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
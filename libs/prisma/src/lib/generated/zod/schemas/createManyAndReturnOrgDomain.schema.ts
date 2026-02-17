import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainCreateManyInputObjectSchema as OrgDomainCreateManyInputObjectSchema } from './objects/OrgDomainCreateManyInput.schema';

export const OrgDomainCreateManyAndReturnSchema: z.ZodType<Prisma.OrgDomainCreateManyAndReturnArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), data: z.union([ OrgDomainCreateManyInputObjectSchema, z.array(OrgDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainCreateManyAndReturnArgs>;

export const OrgDomainCreateManyAndReturnZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), data: z.union([ OrgDomainCreateManyInputObjectSchema, z.array(OrgDomainCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
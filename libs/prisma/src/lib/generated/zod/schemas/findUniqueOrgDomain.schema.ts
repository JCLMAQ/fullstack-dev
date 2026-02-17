import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';

export const OrgDomainFindUniqueSchema: z.ZodType<Prisma.OrgDomainFindUniqueArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgDomainFindUniqueArgs>;

export const OrgDomainFindUniqueZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';

export const OrgDomainFindUniqueOrThrowSchema: z.ZodType<Prisma.OrgDomainFindUniqueOrThrowArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgDomainFindUniqueOrThrowArgs>;

export const OrgDomainFindUniqueOrThrowZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema }).strict();
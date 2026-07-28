import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainCreateInputObjectSchema as OrgDomainCreateInputObjectSchema } from './objects/OrgDomainCreateInput.schema';
import { OrgDomainUncheckedCreateInputObjectSchema as OrgDomainUncheckedCreateInputObjectSchema } from './objects/OrgDomainUncheckedCreateInput.schema';

export const OrgDomainCreateOneSchema: z.ZodType<Prisma.OrgDomainCreateArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), data: z.union([OrgDomainCreateInputObjectSchema, OrgDomainUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OrgDomainCreateArgs>;

export const OrgDomainCreateOneZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), data: z.union([OrgDomainCreateInputObjectSchema, OrgDomainUncheckedCreateInputObjectSchema]) }).strict();
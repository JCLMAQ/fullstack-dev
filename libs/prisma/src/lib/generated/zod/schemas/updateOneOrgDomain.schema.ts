import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainUpdateInputObjectSchema as OrgDomainUpdateInputObjectSchema } from './objects/OrgDomainUpdateInput.schema';
import { OrgDomainUncheckedUpdateInputObjectSchema as OrgDomainUncheckedUpdateInputObjectSchema } from './objects/OrgDomainUncheckedUpdateInput.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';

export const OrgDomainUpdateOneSchema: z.ZodType<Prisma.OrgDomainUpdateArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), data: z.union([OrgDomainUpdateInputObjectSchema, OrgDomainUncheckedUpdateInputObjectSchema]), where: OrgDomainWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgDomainUpdateArgs>;

export const OrgDomainUpdateOneZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), data: z.union([OrgDomainUpdateInputObjectSchema, OrgDomainUncheckedUpdateInputObjectSchema]), where: OrgDomainWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';
import { OrgDomainCreateInputObjectSchema as OrgDomainCreateInputObjectSchema } from './objects/OrgDomainCreateInput.schema';
import { OrgDomainUncheckedCreateInputObjectSchema as OrgDomainUncheckedCreateInputObjectSchema } from './objects/OrgDomainUncheckedCreateInput.schema';
import { OrgDomainUpdateInputObjectSchema as OrgDomainUpdateInputObjectSchema } from './objects/OrgDomainUpdateInput.schema';
import { OrgDomainUncheckedUpdateInputObjectSchema as OrgDomainUncheckedUpdateInputObjectSchema } from './objects/OrgDomainUncheckedUpdateInput.schema';

export const OrgDomainUpsertOneSchema: z.ZodType<Prisma.OrgDomainUpsertArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema, create: z.union([ OrgDomainCreateInputObjectSchema, OrgDomainUncheckedCreateInputObjectSchema ]), update: z.union([ OrgDomainUpdateInputObjectSchema, OrgDomainUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OrgDomainUpsertArgs>;

export const OrgDomainUpsertOneZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), include: OrgDomainIncludeObjectSchema.optional(), where: OrgDomainWhereUniqueInputObjectSchema, create: z.union([ OrgDomainCreateInputObjectSchema, OrgDomainUncheckedCreateInputObjectSchema ]), update: z.union([ OrgDomainUpdateInputObjectSchema, OrgDomainUncheckedUpdateInputObjectSchema ]) }).strict();
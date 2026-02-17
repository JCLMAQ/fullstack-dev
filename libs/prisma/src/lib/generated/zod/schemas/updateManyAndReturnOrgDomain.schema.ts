import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainSelectObjectSchema as OrgDomainSelectObjectSchema } from './objects/OrgDomainSelect.schema';
import { OrgDomainUpdateManyMutationInputObjectSchema as OrgDomainUpdateManyMutationInputObjectSchema } from './objects/OrgDomainUpdateManyMutationInput.schema';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './objects/OrgDomainWhereInput.schema';

export const OrgDomainUpdateManyAndReturnSchema: z.ZodType<Prisma.OrgDomainUpdateManyAndReturnArgs> = z.object({ select: OrgDomainSelectObjectSchema.optional(), data: OrgDomainUpdateManyMutationInputObjectSchema, where: OrgDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainUpdateManyAndReturnArgs>;

export const OrgDomainUpdateManyAndReturnZodSchema = z.object({ select: OrgDomainSelectObjectSchema.optional(), data: OrgDomainUpdateManyMutationInputObjectSchema, where: OrgDomainWhereInputObjectSchema.optional() }).strict();
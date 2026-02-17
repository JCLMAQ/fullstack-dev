import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainUpdateManyMutationInputObjectSchema as OrgDomainUpdateManyMutationInputObjectSchema } from './objects/OrgDomainUpdateManyMutationInput.schema';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './objects/OrgDomainWhereInput.schema';

export const OrgDomainUpdateManySchema: z.ZodType<Prisma.OrgDomainUpdateManyArgs> = z.object({ data: OrgDomainUpdateManyMutationInputObjectSchema, where: OrgDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainUpdateManyArgs>;

export const OrgDomainUpdateManyZodSchema = z.object({ data: OrgDomainUpdateManyMutationInputObjectSchema, where: OrgDomainWhereInputObjectSchema.optional() }).strict();
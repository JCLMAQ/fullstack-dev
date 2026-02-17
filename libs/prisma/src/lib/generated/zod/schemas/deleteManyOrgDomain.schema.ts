import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './objects/OrgDomainWhereInput.schema';

export const OrgDomainDeleteManySchema: z.ZodType<Prisma.OrgDomainDeleteManyArgs> = z.object({ where: OrgDomainWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainDeleteManyArgs>;

export const OrgDomainDeleteManyZodSchema = z.object({ where: OrgDomainWhereInputObjectSchema.optional() }).strict();
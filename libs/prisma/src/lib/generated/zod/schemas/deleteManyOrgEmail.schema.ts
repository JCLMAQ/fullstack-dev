import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './objects/OrgEmailWhereInput.schema';

export const OrgEmailDeleteManySchema: z.ZodType<Prisma.OrgEmailDeleteManyArgs> = z.object({ where: OrgEmailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailDeleteManyArgs>;

export const OrgEmailDeleteManyZodSchema = z.object({ where: OrgEmailWhereInputObjectSchema.optional() }).strict();
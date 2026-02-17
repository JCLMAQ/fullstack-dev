import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';

export const OrgEmailDeleteOneSchema: z.ZodType<Prisma.OrgEmailDeleteArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailDeleteArgs>;

export const OrgEmailDeleteOneZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema }).strict();
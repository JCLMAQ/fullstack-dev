import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';

export const OrgEmailFindUniqueSchema: z.ZodType<Prisma.OrgEmailFindUniqueArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailFindUniqueArgs>;

export const OrgEmailFindUniqueZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema }).strict();
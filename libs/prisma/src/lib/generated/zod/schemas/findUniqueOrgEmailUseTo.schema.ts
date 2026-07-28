import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';

export const OrgEmailUseToFindUniqueSchema: z.ZodType<Prisma.OrgEmailUseToFindUniqueArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToFindUniqueArgs>;

export const OrgEmailUseToFindUniqueZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict();
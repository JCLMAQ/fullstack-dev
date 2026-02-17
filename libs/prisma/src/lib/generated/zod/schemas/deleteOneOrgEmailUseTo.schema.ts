import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';

export const OrgEmailUseToDeleteOneSchema: z.ZodType<Prisma.OrgEmailUseToDeleteArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToDeleteArgs>;

export const OrgEmailUseToDeleteOneZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict();
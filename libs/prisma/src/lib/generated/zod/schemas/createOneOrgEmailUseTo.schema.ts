import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToCreateInputObjectSchema as OrgEmailUseToCreateInputObjectSchema } from './objects/OrgEmailUseToCreateInput.schema';
import { OrgEmailUseToUncheckedCreateInputObjectSchema as OrgEmailUseToUncheckedCreateInputObjectSchema } from './objects/OrgEmailUseToUncheckedCreateInput.schema';

export const OrgEmailUseToCreateOneSchema: z.ZodType<Prisma.OrgEmailUseToCreateArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), data: z.union([OrgEmailUseToCreateInputObjectSchema, OrgEmailUseToUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToCreateArgs>;

export const OrgEmailUseToCreateOneZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), data: z.union([OrgEmailUseToCreateInputObjectSchema, OrgEmailUseToUncheckedCreateInputObjectSchema]) }).strict();
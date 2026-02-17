import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailCreateInputObjectSchema as OrgEmailCreateInputObjectSchema } from './objects/OrgEmailCreateInput.schema';
import { OrgEmailUncheckedCreateInputObjectSchema as OrgEmailUncheckedCreateInputObjectSchema } from './objects/OrgEmailUncheckedCreateInput.schema';

export const OrgEmailCreateOneSchema: z.ZodType<Prisma.OrgEmailCreateArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), data: z.union([OrgEmailCreateInputObjectSchema, OrgEmailUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OrgEmailCreateArgs>;

export const OrgEmailCreateOneZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), data: z.union([OrgEmailCreateInputObjectSchema, OrgEmailUncheckedCreateInputObjectSchema]) }).strict();
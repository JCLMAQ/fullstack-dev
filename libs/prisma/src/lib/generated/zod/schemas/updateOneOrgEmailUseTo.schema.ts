import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToUpdateInputObjectSchema as OrgEmailUseToUpdateInputObjectSchema } from './objects/OrgEmailUseToUpdateInput.schema';
import { OrgEmailUseToUncheckedUpdateInputObjectSchema as OrgEmailUseToUncheckedUpdateInputObjectSchema } from './objects/OrgEmailUseToUncheckedUpdateInput.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';

export const OrgEmailUseToUpdateOneSchema: z.ZodType<Prisma.OrgEmailUseToUpdateArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), data: z.union([OrgEmailUseToUpdateInputObjectSchema, OrgEmailUseToUncheckedUpdateInputObjectSchema]), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToUpdateArgs>;

export const OrgEmailUseToUpdateOneZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), data: z.union([OrgEmailUseToUpdateInputObjectSchema, OrgEmailUseToUncheckedUpdateInputObjectSchema]), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';

export const OrgEmailUseToFindUniqueOrThrowSchema: z.ZodType<Prisma.OrgEmailUseToFindUniqueOrThrowArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToFindUniqueOrThrowArgs>;

export const OrgEmailUseToFindUniqueOrThrowZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailUpdateInputObjectSchema as OrgEmailUpdateInputObjectSchema } from './objects/OrgEmailUpdateInput.schema';
import { OrgEmailUncheckedUpdateInputObjectSchema as OrgEmailUncheckedUpdateInputObjectSchema } from './objects/OrgEmailUncheckedUpdateInput.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';

export const OrgEmailUpdateOneSchema: z.ZodType<Prisma.OrgEmailUpdateArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), data: z.union([OrgEmailUpdateInputObjectSchema, OrgEmailUncheckedUpdateInputObjectSchema]), where: OrgEmailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrgEmailUpdateArgs>;

export const OrgEmailUpdateOneZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), data: z.union([OrgEmailUpdateInputObjectSchema, OrgEmailUncheckedUpdateInputObjectSchema]), where: OrgEmailWhereUniqueInputObjectSchema }).strict();
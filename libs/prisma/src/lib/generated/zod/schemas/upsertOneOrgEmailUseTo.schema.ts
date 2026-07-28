import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToSelectObjectSchema as OrgEmailUseToSelectObjectSchema } from './objects/OrgEmailUseToSelect.schema';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToCreateInputObjectSchema as OrgEmailUseToCreateInputObjectSchema } from './objects/OrgEmailUseToCreateInput.schema';
import { OrgEmailUseToUncheckedCreateInputObjectSchema as OrgEmailUseToUncheckedCreateInputObjectSchema } from './objects/OrgEmailUseToUncheckedCreateInput.schema';
import { OrgEmailUseToUpdateInputObjectSchema as OrgEmailUseToUpdateInputObjectSchema } from './objects/OrgEmailUseToUpdateInput.schema';
import { OrgEmailUseToUncheckedUpdateInputObjectSchema as OrgEmailUseToUncheckedUpdateInputObjectSchema } from './objects/OrgEmailUseToUncheckedUpdateInput.schema';

export const OrgEmailUseToUpsertOneSchema: z.ZodType<Prisma.OrgEmailUseToUpsertArgs> = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema, create: z.union([ OrgEmailUseToCreateInputObjectSchema, OrgEmailUseToUncheckedCreateInputObjectSchema ]), update: z.union([ OrgEmailUseToUpdateInputObjectSchema, OrgEmailUseToUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToUpsertArgs>;

export const OrgEmailUseToUpsertOneZodSchema = z.object({ select: OrgEmailUseToSelectObjectSchema.optional(), include: OrgEmailUseToIncludeObjectSchema.optional(), where: OrgEmailUseToWhereUniqueInputObjectSchema, create: z.union([ OrgEmailUseToCreateInputObjectSchema, OrgEmailUseToUncheckedCreateInputObjectSchema ]), update: z.union([ OrgEmailUseToUpdateInputObjectSchema, OrgEmailUseToUncheckedUpdateInputObjectSchema ]) }).strict();
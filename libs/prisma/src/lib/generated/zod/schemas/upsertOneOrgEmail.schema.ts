import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailSelectObjectSchema as OrgEmailSelectObjectSchema } from './objects/OrgEmailSelect.schema';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';
import { OrgEmailCreateInputObjectSchema as OrgEmailCreateInputObjectSchema } from './objects/OrgEmailCreateInput.schema';
import { OrgEmailUncheckedCreateInputObjectSchema as OrgEmailUncheckedCreateInputObjectSchema } from './objects/OrgEmailUncheckedCreateInput.schema';
import { OrgEmailUpdateInputObjectSchema as OrgEmailUpdateInputObjectSchema } from './objects/OrgEmailUpdateInput.schema';
import { OrgEmailUncheckedUpdateInputObjectSchema as OrgEmailUncheckedUpdateInputObjectSchema } from './objects/OrgEmailUncheckedUpdateInput.schema';

export const OrgEmailUpsertOneSchema: z.ZodType<Prisma.OrgEmailUpsertArgs> = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema, create: z.union([ OrgEmailCreateInputObjectSchema, OrgEmailUncheckedCreateInputObjectSchema ]), update: z.union([ OrgEmailUpdateInputObjectSchema, OrgEmailUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OrgEmailUpsertArgs>;

export const OrgEmailUpsertOneZodSchema = z.object({ select: OrgEmailSelectObjectSchema.optional(), include: OrgEmailIncludeObjectSchema.optional(), where: OrgEmailWhereUniqueInputObjectSchema, create: z.union([ OrgEmailCreateInputObjectSchema, OrgEmailUncheckedCreateInputObjectSchema ]), update: z.union([ OrgEmailUpdateInputObjectSchema, OrgEmailUncheckedUpdateInputObjectSchema ]) }).strict();
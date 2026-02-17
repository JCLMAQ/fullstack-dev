import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './objects/LanguageInclude.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './objects/LanguageWhereUniqueInput.schema';
import { LanguageCreateInputObjectSchema as LanguageCreateInputObjectSchema } from './objects/LanguageCreateInput.schema';
import { LanguageUncheckedCreateInputObjectSchema as LanguageUncheckedCreateInputObjectSchema } from './objects/LanguageUncheckedCreateInput.schema';
import { LanguageUpdateInputObjectSchema as LanguageUpdateInputObjectSchema } from './objects/LanguageUpdateInput.schema';
import { LanguageUncheckedUpdateInputObjectSchema as LanguageUncheckedUpdateInputObjectSchema } from './objects/LanguageUncheckedUpdateInput.schema';

export const LanguageUpsertOneSchema: z.ZodType<Prisma.LanguageUpsertArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema, create: z.union([ LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema ]), update: z.union([ LanguageUpdateInputObjectSchema, LanguageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LanguageUpsertArgs>;

export const LanguageUpsertOneZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), include: LanguageIncludeObjectSchema.optional(), where: LanguageWhereUniqueInputObjectSchema, create: z.union([ LanguageCreateInputObjectSchema, LanguageUncheckedCreateInputObjectSchema ]), update: z.union([ LanguageUpdateInputObjectSchema, LanguageUncheckedUpdateInputObjectSchema ]) }).strict();
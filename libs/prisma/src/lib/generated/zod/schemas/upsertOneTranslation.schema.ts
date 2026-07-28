import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './objects/TranslationInclude.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';
import { TranslationCreateInputObjectSchema as TranslationCreateInputObjectSchema } from './objects/TranslationCreateInput.schema';
import { TranslationUncheckedCreateInputObjectSchema as TranslationUncheckedCreateInputObjectSchema } from './objects/TranslationUncheckedCreateInput.schema';
import { TranslationUpdateInputObjectSchema as TranslationUpdateInputObjectSchema } from './objects/TranslationUpdateInput.schema';
import { TranslationUncheckedUpdateInputObjectSchema as TranslationUncheckedUpdateInputObjectSchema } from './objects/TranslationUncheckedUpdateInput.schema';

export const TranslationUpsertOneSchema: z.ZodType<Prisma.TranslationUpsertArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema, create: z.union([ TranslationCreateInputObjectSchema, TranslationUncheckedCreateInputObjectSchema ]), update: z.union([ TranslationUpdateInputObjectSchema, TranslationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TranslationUpsertArgs>;

export const TranslationUpsertOneZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), include: TranslationIncludeObjectSchema.optional(), where: TranslationWhereUniqueInputObjectSchema, create: z.union([ TranslationCreateInputObjectSchema, TranslationUncheckedCreateInputObjectSchema ]), update: z.union([ TranslationUpdateInputObjectSchema, TranslationUncheckedUpdateInputObjectSchema ]) }).strict();
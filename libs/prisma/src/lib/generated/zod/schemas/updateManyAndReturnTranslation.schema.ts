import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationUpdateManyMutationInputObjectSchema as TranslationUpdateManyMutationInputObjectSchema } from './objects/TranslationUpdateManyMutationInput.schema';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';

export const TranslationUpdateManyAndReturnSchema: z.ZodType<Prisma.TranslationUpdateManyAndReturnArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), data: TranslationUpdateManyMutationInputObjectSchema, where: TranslationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TranslationUpdateManyAndReturnArgs>;

export const TranslationUpdateManyAndReturnZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), data: TranslationUpdateManyMutationInputObjectSchema, where: TranslationWhereInputObjectSchema.optional() }).strict();
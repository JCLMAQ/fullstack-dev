import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationUpdateManyMutationInputObjectSchema as TranslationUpdateManyMutationInputObjectSchema } from './objects/TranslationUpdateManyMutationInput.schema';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';

export const TranslationUpdateManySchema: z.ZodType<Prisma.TranslationUpdateManyArgs> = z.object({ data: TranslationUpdateManyMutationInputObjectSchema, where: TranslationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TranslationUpdateManyArgs>;

export const TranslationUpdateManyZodSchema = z.object({ data: TranslationUpdateManyMutationInputObjectSchema, where: TranslationWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { LanguageUpdateManyMutationInputObjectSchema as LanguageUpdateManyMutationInputObjectSchema } from './objects/LanguageUpdateManyMutationInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';

export const LanguageUpdateManySchema: z.ZodType<Prisma.LanguageUpdateManyArgs> = z.object({ data: LanguageUpdateManyMutationInputObjectSchema, where: LanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageUpdateManyArgs>;

export const LanguageUpdateManyZodSchema = z.object({ data: LanguageUpdateManyMutationInputObjectSchema, where: LanguageWhereInputObjectSchema.optional() }).strict();
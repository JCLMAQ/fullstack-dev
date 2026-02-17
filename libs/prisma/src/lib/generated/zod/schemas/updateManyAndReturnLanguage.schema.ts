import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageUpdateManyMutationInputObjectSchema as LanguageUpdateManyMutationInputObjectSchema } from './objects/LanguageUpdateManyMutationInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';

export const LanguageUpdateManyAndReturnSchema: z.ZodType<Prisma.LanguageUpdateManyAndReturnArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), data: LanguageUpdateManyMutationInputObjectSchema, where: LanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageUpdateManyAndReturnArgs>;

export const LanguageUpdateManyAndReturnZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), data: LanguageUpdateManyMutationInputObjectSchema, where: LanguageWhereInputObjectSchema.optional() }).strict();
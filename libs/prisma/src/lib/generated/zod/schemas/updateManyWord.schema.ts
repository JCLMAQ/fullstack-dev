import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordUpdateManyMutationInputObjectSchema as WordUpdateManyMutationInputObjectSchema } from './objects/WordUpdateManyMutationInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';

export const WordUpdateManySchema: z.ZodType<Prisma.WordUpdateManyArgs> = z.object({ data: WordUpdateManyMutationInputObjectSchema, where: WordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WordUpdateManyArgs>;

export const WordUpdateManyZodSchema = z.object({ data: WordUpdateManyMutationInputObjectSchema, where: WordWhereInputObjectSchema.optional() }).strict();
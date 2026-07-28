import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateUpdateManyMutationInputObjectSchema as TagTranslateUpdateManyMutationInputObjectSchema } from './objects/TagTranslateUpdateManyMutationInput.schema';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './objects/TagTranslateWhereInput.schema';

export const TagTranslateUpdateManySchema: z.ZodType<Prisma.TagTranslateUpdateManyArgs> = z.object({ data: TagTranslateUpdateManyMutationInputObjectSchema, where: TagTranslateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateUpdateManyArgs>;

export const TagTranslateUpdateManyZodSchema = z.object({ data: TagTranslateUpdateManyMutationInputObjectSchema, where: TagTranslateWhereInputObjectSchema.optional() }).strict();
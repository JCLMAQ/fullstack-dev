import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './objects/TagTranslateWhereInput.schema';

export const TagTranslateDeleteManySchema: z.ZodType<Prisma.TagTranslateDeleteManyArgs> = z.object({ where: TagTranslateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateDeleteManyArgs>;

export const TagTranslateDeleteManyZodSchema = z.object({ where: TagTranslateWhereInputObjectSchema.optional() }).strict();
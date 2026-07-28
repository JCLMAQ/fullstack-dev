import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './objects/TagTranslateSelect.schema';
import { TagTranslateUpdateManyMutationInputObjectSchema as TagTranslateUpdateManyMutationInputObjectSchema } from './objects/TagTranslateUpdateManyMutationInput.schema';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './objects/TagTranslateWhereInput.schema';

export const TagTranslateUpdateManyAndReturnSchema: z.ZodType<Prisma.TagTranslateUpdateManyAndReturnArgs> = z.object({ select: TagTranslateSelectObjectSchema.optional(), data: TagTranslateUpdateManyMutationInputObjectSchema, where: TagTranslateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateUpdateManyAndReturnArgs>;

export const TagTranslateUpdateManyAndReturnZodSchema = z.object({ select: TagTranslateSelectObjectSchema.optional(), data: TagTranslateUpdateManyMutationInputObjectSchema, where: TagTranslateWhereInputObjectSchema.optional() }).strict();
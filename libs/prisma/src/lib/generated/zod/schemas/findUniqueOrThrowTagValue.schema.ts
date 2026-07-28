import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';

export const TagValueFindUniqueOrThrowSchema: z.ZodType<Prisma.TagValueFindUniqueOrThrowArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagValueFindUniqueOrThrowArgs>;

export const TagValueFindUniqueOrThrowZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict();
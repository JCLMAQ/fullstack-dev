import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';

export const TagValueFindUniqueSchema: z.ZodType<Prisma.TagValueFindUniqueArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagValueFindUniqueArgs>;

export const TagValueFindUniqueZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict();
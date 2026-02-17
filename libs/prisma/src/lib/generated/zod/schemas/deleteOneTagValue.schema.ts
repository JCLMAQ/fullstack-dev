import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';

export const TagValueDeleteOneSchema: z.ZodType<Prisma.TagValueDeleteArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagValueDeleteArgs>;

export const TagValueDeleteOneZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema }).strict();
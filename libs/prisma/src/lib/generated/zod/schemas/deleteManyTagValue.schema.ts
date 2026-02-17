import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';

export const TagValueDeleteManySchema: z.ZodType<Prisma.TagValueDeleteManyArgs> = z.object({ where: TagValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagValueDeleteManyArgs>;

export const TagValueDeleteManyZodSchema = z.object({ where: TagValueWhereInputObjectSchema.optional() }).strict();
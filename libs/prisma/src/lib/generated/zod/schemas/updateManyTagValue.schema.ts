import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './objects/TagValueUpdateManyMutationInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';

export const TagValueUpdateManySchema: z.ZodType<Prisma.TagValueUpdateManyArgs> = z.object({ data: TagValueUpdateManyMutationInputObjectSchema, where: TagValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagValueUpdateManyArgs>;

export const TagValueUpdateManyZodSchema = z.object({ data: TagValueUpdateManyMutationInputObjectSchema, where: TagValueWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './objects/TagValueUpdateManyMutationInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';

export const TagValueUpdateManyAndReturnSchema: z.ZodType<Prisma.TagValueUpdateManyAndReturnArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), data: TagValueUpdateManyMutationInputObjectSchema, where: TagValueWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TagValueUpdateManyAndReturnArgs>;

export const TagValueUpdateManyAndReturnZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), data: TagValueUpdateManyMutationInputObjectSchema, where: TagValueWhereInputObjectSchema.optional() }).strict();
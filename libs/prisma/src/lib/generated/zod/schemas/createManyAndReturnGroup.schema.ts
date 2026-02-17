import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupCreateManyInputObjectSchema as GroupCreateManyInputObjectSchema } from './objects/GroupCreateManyInput.schema';

export const GroupCreateManyAndReturnSchema: z.ZodType<Prisma.GroupCreateManyAndReturnArgs> = z.object({ select: GroupSelectObjectSchema.optional(), data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GroupCreateManyAndReturnArgs>;

export const GroupCreateManyAndReturnZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
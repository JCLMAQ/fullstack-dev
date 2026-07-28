import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { GroupCreateManyInputObjectSchema as GroupCreateManyInputObjectSchema } from './objects/GroupCreateManyInput.schema';

export const GroupCreateManySchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({ data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GroupCreateManyArgs>;

export const GroupCreateManyZodSchema = z.object({ data: z.union([ GroupCreateManyInputObjectSchema, z.array(GroupCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupSelectObjectSchema as GroupSelectObjectSchema } from './objects/GroupSelect.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './objects/GroupUpdateManyMutationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';

export const GroupUpdateManyAndReturnSchema: z.ZodType<Prisma.GroupUpdateManyAndReturnArgs> = z.object({ select: GroupSelectObjectSchema.optional(), data: GroupUpdateManyMutationInputObjectSchema, where: GroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupUpdateManyAndReturnArgs>;

export const GroupUpdateManyAndReturnZodSchema = z.object({ select: GroupSelectObjectSchema.optional(), data: GroupUpdateManyMutationInputObjectSchema, where: GroupWhereInputObjectSchema.optional() }).strict();
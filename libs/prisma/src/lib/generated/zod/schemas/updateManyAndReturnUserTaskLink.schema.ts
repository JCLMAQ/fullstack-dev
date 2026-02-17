import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkUpdateManyMutationInputObjectSchema as UserTaskLinkUpdateManyMutationInputObjectSchema } from './objects/UserTaskLinkUpdateManyMutationInput.schema';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';

export const UserTaskLinkUpdateManyAndReturnSchema: z.ZodType<Prisma.UserTaskLinkUpdateManyAndReturnArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), data: UserTaskLinkUpdateManyMutationInputObjectSchema, where: UserTaskLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateManyAndReturnArgs>;

export const UserTaskLinkUpdateManyAndReturnZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), data: UserTaskLinkUpdateManyMutationInputObjectSchema, where: UserTaskLinkWhereInputObjectSchema.optional() }).strict();
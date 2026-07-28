import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkUpdateManyMutationInputObjectSchema as UserTaskLinkUpdateManyMutationInputObjectSchema } from './objects/UserTaskLinkUpdateManyMutationInput.schema';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';

export const UserTaskLinkUpdateManySchema: z.ZodType<Prisma.UserTaskLinkUpdateManyArgs> = z.object({ data: UserTaskLinkUpdateManyMutationInputObjectSchema, where: UserTaskLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateManyArgs>;

export const UserTaskLinkUpdateManyZodSchema = z.object({ data: UserTaskLinkUpdateManyMutationInputObjectSchema, where: UserTaskLinkWhereInputObjectSchema.optional() }).strict();
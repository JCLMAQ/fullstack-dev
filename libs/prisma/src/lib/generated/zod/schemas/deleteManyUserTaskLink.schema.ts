import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';

export const UserTaskLinkDeleteManySchema: z.ZodType<Prisma.UserTaskLinkDeleteManyArgs> = z.object({ where: UserTaskLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkDeleteManyArgs>;

export const UserTaskLinkDeleteManyZodSchema = z.object({ where: UserTaskLinkWhereInputObjectSchema.optional() }).strict();
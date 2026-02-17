import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoDeleteOneSchema: z.ZodType<Prisma.TodoDeleteArgs> = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TodoDeleteArgs>;

export const TodoDeleteOneZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema }).strict();
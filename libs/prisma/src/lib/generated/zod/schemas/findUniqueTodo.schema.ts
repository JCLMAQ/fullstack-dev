import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoFindUniqueSchema: z.ZodType<Prisma.TodoFindUniqueArgs> = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TodoFindUniqueArgs>;

export const TodoFindUniqueZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema }).strict();
import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoUpdateInputObjectSchema as TodoUpdateInputObjectSchema } from './objects/TodoUpdateInput.schema';
import { TodoUncheckedUpdateInputObjectSchema as TodoUncheckedUpdateInputObjectSchema } from './objects/TodoUncheckedUpdateInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoUpdateOneSchema: z.ZodType<Prisma.TodoUpdateArgs> = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), data: z.union([TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema]), where: TodoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TodoUpdateArgs>;

export const TodoUpdateOneZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), data: z.union([TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema]), where: TodoWhereUniqueInputObjectSchema }).strict();
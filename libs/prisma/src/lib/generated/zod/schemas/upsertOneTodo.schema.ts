import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCreateInputObjectSchema as TodoCreateInputObjectSchema } from './objects/TodoCreateInput.schema';
import { TodoUncheckedCreateInputObjectSchema as TodoUncheckedCreateInputObjectSchema } from './objects/TodoUncheckedCreateInput.schema';
import { TodoUpdateInputObjectSchema as TodoUpdateInputObjectSchema } from './objects/TodoUpdateInput.schema';
import { TodoUncheckedUpdateInputObjectSchema as TodoUncheckedUpdateInputObjectSchema } from './objects/TodoUncheckedUpdateInput.schema';

export const TodoUpsertOneSchema: z.ZodType<Prisma.TodoUpsertArgs> = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema, create: z.union([ TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema ]), update: z.union([ TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TodoUpsertArgs>;

export const TodoUpsertOneZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), include: TodoIncludeObjectSchema.optional(), where: TodoWhereUniqueInputObjectSchema, create: z.union([ TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema ]), update: z.union([ TodoUpdateInputObjectSchema, TodoUncheckedUpdateInputObjectSchema ]) }).strict();
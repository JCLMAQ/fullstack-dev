import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './objects/TodoUpdateManyMutationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';

export const TodoUpdateManyAndReturnSchema: z.ZodType<Prisma.TodoUpdateManyAndReturnArgs> = z.object({ select: TodoSelectObjectSchema.optional(), data: TodoUpdateManyMutationInputObjectSchema, where: TodoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoUpdateManyAndReturnArgs>;

export const TodoUpdateManyAndReturnZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), data: TodoUpdateManyMutationInputObjectSchema, where: TodoWhereInputObjectSchema.optional() }).strict();
import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoUpdateWithoutUsersInputObjectSchema as TodoUpdateWithoutUsersInputObjectSchema } from './TodoUpdateWithoutUsersInput.schema';
import { TodoUncheckedUpdateWithoutUsersInputObjectSchema as TodoUncheckedUpdateWithoutUsersInputObjectSchema } from './TodoUncheckedUpdateWithoutUsersInput.schema';
import { TodoCreateWithoutUsersInputObjectSchema as TodoCreateWithoutUsersInputObjectSchema } from './TodoCreateWithoutUsersInput.schema';
import { TodoUncheckedCreateWithoutUsersInputObjectSchema as TodoUncheckedCreateWithoutUsersInputObjectSchema } from './TodoUncheckedCreateWithoutUsersInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TodoUpdateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithoutUsersInput>;
export const TodoUpsertWithoutUsersInputObjectZodSchema = makeSchema();

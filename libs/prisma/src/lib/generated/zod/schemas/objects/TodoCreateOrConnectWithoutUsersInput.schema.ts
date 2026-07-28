import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutUsersInputObjectSchema as TodoCreateWithoutUsersInputObjectSchema } from './TodoCreateWithoutUsersInput.schema';
import { TodoUncheckedCreateWithoutUsersInputObjectSchema as TodoUncheckedCreateWithoutUsersInputObjectSchema } from './TodoUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutUsersInput>;
export const TodoCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();

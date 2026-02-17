import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateWithoutUsersInputObjectSchema as TodoCreateWithoutUsersInputObjectSchema } from './TodoCreateWithoutUsersInput.schema';
import { TodoUncheckedCreateWithoutUsersInputObjectSchema as TodoUncheckedCreateWithoutUsersInputObjectSchema } from './TodoUncheckedCreateWithoutUsersInput.schema';
import { TodoCreateOrConnectWithoutUsersInputObjectSchema as TodoCreateOrConnectWithoutUsersInputObjectSchema } from './TodoCreateOrConnectWithoutUsersInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional()
}).strict();
export const TodoCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.TodoCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateNestedOneWithoutUsersInput>;
export const TodoCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();

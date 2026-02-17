import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateWithoutUsersInputObjectSchema as TodoCreateWithoutUsersInputObjectSchema } from './TodoCreateWithoutUsersInput.schema';
import { TodoUncheckedCreateWithoutUsersInputObjectSchema as TodoUncheckedCreateWithoutUsersInputObjectSchema } from './TodoUncheckedCreateWithoutUsersInput.schema';
import { TodoCreateOrConnectWithoutUsersInputObjectSchema as TodoCreateOrConnectWithoutUsersInputObjectSchema } from './TodoCreateOrConnectWithoutUsersInput.schema';
import { TodoUpsertWithoutUsersInputObjectSchema as TodoUpsertWithoutUsersInputObjectSchema } from './TodoUpsertWithoutUsersInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateToOneWithWhereWithoutUsersInputObjectSchema as TodoUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './TodoUpdateToOneWithWhereWithoutUsersInput.schema';
import { TodoUpdateWithoutUsersInputObjectSchema as TodoUpdateWithoutUsersInputObjectSchema } from './TodoUpdateWithoutUsersInput.schema';
import { TodoUncheckedUpdateWithoutUsersInputObjectSchema as TodoUncheckedUpdateWithoutUsersInputObjectSchema } from './TodoUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TodoCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => TodoUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TodoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TodoUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => TodoUpdateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const TodoUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateOneRequiredWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateOneRequiredWithoutUsersNestedInput>;
export const TodoUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = makeSchema();

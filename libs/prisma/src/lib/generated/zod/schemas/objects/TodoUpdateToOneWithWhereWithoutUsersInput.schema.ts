import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TodoUpdateWithoutUsersInputObjectSchema as TodoUpdateWithoutUsersInputObjectSchema } from './TodoUpdateWithoutUsersInput.schema';
import { TodoUncheckedUpdateWithoutUsersInputObjectSchema as TodoUncheckedUpdateWithoutUsersInputObjectSchema } from './TodoUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TodoUpdateWithoutUsersInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const TodoUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateToOneWithWhereWithoutUsersInput>;
export const TodoUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();

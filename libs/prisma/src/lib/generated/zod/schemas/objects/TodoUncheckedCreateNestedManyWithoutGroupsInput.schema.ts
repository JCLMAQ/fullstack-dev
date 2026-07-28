import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutGroupsInputObjectSchema as TodoCreateWithoutGroupsInputObjectSchema } from './TodoCreateWithoutGroupsInput.schema';
import { TodoUncheckedCreateWithoutGroupsInputObjectSchema as TodoUncheckedCreateWithoutGroupsInputObjectSchema } from './TodoUncheckedCreateWithoutGroupsInput.schema';
import { TodoCreateOrConnectWithoutGroupsInputObjectSchema as TodoCreateOrConnectWithoutGroupsInputObjectSchema } from './TodoCreateOrConnectWithoutGroupsInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutGroupsInput>;
export const TodoUncheckedCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();

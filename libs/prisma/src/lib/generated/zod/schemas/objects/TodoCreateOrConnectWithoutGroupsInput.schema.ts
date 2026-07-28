import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutGroupsInputObjectSchema as TodoCreateWithoutGroupsInputObjectSchema } from './TodoCreateWithoutGroupsInput.schema';
import { TodoUncheckedCreateWithoutGroupsInputObjectSchema as TodoUncheckedCreateWithoutGroupsInputObjectSchema } from './TodoUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutGroupsInput>;
export const TodoCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();

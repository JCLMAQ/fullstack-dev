import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutGroupsInputObjectSchema as TodoCreateWithoutGroupsInputObjectSchema } from './TodoCreateWithoutGroupsInput.schema';
import { TodoUncheckedCreateWithoutGroupsInputObjectSchema as TodoUncheckedCreateWithoutGroupsInputObjectSchema } from './TodoUncheckedCreateWithoutGroupsInput.schema';
import { TodoCreateOrConnectWithoutGroupsInputObjectSchema as TodoCreateOrConnectWithoutGroupsInputObjectSchema } from './TodoCreateOrConnectWithoutGroupsInput.schema';
import { TodoUpsertWithWhereUniqueWithoutGroupsInputObjectSchema as TodoUpsertWithWhereUniqueWithoutGroupsInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutGroupsInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutGroupsInputObjectSchema as TodoUpdateWithWhereUniqueWithoutGroupsInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutGroupsInput.schema';
import { TodoUpdateManyWithWhereWithoutGroupsInputObjectSchema as TodoUpdateManyWithWhereWithoutGroupsInputObjectSchema } from './TodoUpdateManyWithWhereWithoutGroupsInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutGroupsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.TodoUncheckedUpdateManyWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedUpdateManyWithoutGroupsNestedInput>;
export const TodoUncheckedUpdateManyWithoutGroupsNestedInputObjectZodSchema = makeSchema();

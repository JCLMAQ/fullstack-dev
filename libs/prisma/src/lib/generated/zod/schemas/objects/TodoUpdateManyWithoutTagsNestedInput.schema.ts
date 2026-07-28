import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutTagsInputObjectSchema as TodoCreateWithoutTagsInputObjectSchema } from './TodoCreateWithoutTagsInput.schema';
import { TodoUncheckedCreateWithoutTagsInputObjectSchema as TodoUncheckedCreateWithoutTagsInputObjectSchema } from './TodoUncheckedCreateWithoutTagsInput.schema';
import { TodoCreateOrConnectWithoutTagsInputObjectSchema as TodoCreateOrConnectWithoutTagsInputObjectSchema } from './TodoCreateOrConnectWithoutTagsInput.schema';
import { TodoUpsertWithWhereUniqueWithoutTagsInputObjectSchema as TodoUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutTagsInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutTagsInputObjectSchema as TodoUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutTagsInput.schema';
import { TodoUpdateManyWithWhereWithoutTagsInputObjectSchema as TodoUpdateManyWithWhereWithoutTagsInputObjectSchema } from './TodoUpdateManyWithWhereWithoutTagsInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithoutTagsNestedInput>;
export const TodoUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();

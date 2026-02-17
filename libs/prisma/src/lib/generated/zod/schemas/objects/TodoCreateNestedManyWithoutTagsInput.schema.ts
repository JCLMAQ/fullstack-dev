import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateWithoutTagsInputObjectSchema as TodoCreateWithoutTagsInputObjectSchema } from './TodoCreateWithoutTagsInput.schema';
import { TodoUncheckedCreateWithoutTagsInputObjectSchema as TodoUncheckedCreateWithoutTagsInputObjectSchema } from './TodoUncheckedCreateWithoutTagsInput.schema';
import { TodoCreateOrConnectWithoutTagsInputObjectSchema as TodoCreateOrConnectWithoutTagsInputObjectSchema } from './TodoCreateOrConnectWithoutTagsInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoCreateNestedManyWithoutTagsInputObjectSchema: z.ZodType<Prisma.TodoCreateNestedManyWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateNestedManyWithoutTagsInput>;
export const TodoCreateNestedManyWithoutTagsInputObjectZodSchema = makeSchema();

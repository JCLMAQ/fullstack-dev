import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutTagsInputObjectSchema as TodoCreateWithoutTagsInputObjectSchema } from './TodoCreateWithoutTagsInput.schema';
import { TodoUncheckedCreateWithoutTagsInputObjectSchema as TodoUncheckedCreateWithoutTagsInputObjectSchema } from './TodoUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutTagsInput>;
export const TodoCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();

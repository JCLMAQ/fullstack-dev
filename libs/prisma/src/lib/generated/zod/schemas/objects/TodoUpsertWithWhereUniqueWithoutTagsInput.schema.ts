import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutTagsInputObjectSchema as TodoUpdateWithoutTagsInputObjectSchema } from './TodoUpdateWithoutTagsInput.schema';
import { TodoUncheckedUpdateWithoutTagsInputObjectSchema as TodoUncheckedUpdateWithoutTagsInputObjectSchema } from './TodoUncheckedUpdateWithoutTagsInput.schema';
import { TodoCreateWithoutTagsInputObjectSchema as TodoCreateWithoutTagsInputObjectSchema } from './TodoCreateWithoutTagsInput.schema';
import { TodoUncheckedCreateWithoutTagsInputObjectSchema as TodoUncheckedCreateWithoutTagsInputObjectSchema } from './TodoUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutTagsInput>;
export const TodoUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

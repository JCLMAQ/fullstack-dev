import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutGroupsInputObjectSchema as TodoUpdateWithoutGroupsInputObjectSchema } from './TodoUpdateWithoutGroupsInput.schema';
import { TodoUncheckedUpdateWithoutGroupsInputObjectSchema as TodoUncheckedUpdateWithoutGroupsInputObjectSchema } from './TodoUncheckedUpdateWithoutGroupsInput.schema';
import { TodoCreateWithoutGroupsInputObjectSchema as TodoCreateWithoutGroupsInputObjectSchema } from './TodoCreateWithoutGroupsInput.schema';
import { TodoUncheckedCreateWithoutGroupsInputObjectSchema as TodoUncheckedCreateWithoutGroupsInputObjectSchema } from './TodoUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutGroupsInput>;
export const TodoUpsertWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

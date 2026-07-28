import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutGroupsInputObjectSchema as TodoUpdateWithoutGroupsInputObjectSchema } from './TodoUpdateWithoutGroupsInput.schema';
import { TodoUncheckedUpdateWithoutGroupsInputObjectSchema as TodoUncheckedUpdateWithoutGroupsInputObjectSchema } from './TodoUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutGroupsInput>;
export const TodoUpdateWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

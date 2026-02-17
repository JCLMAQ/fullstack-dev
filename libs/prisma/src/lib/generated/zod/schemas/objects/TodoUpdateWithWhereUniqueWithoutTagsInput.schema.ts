import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutTagsInputObjectSchema as TodoUpdateWithoutTagsInputObjectSchema } from './TodoUpdateWithoutTagsInput.schema';
import { TodoUncheckedUpdateWithoutTagsInputObjectSchema as TodoUncheckedUpdateWithoutTagsInputObjectSchema } from './TodoUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutTagsInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutTagsInput>;
export const TodoUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

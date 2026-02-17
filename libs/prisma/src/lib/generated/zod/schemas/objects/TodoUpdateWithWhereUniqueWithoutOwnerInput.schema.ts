import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutOwnerInputObjectSchema as TodoUpdateWithoutOwnerInputObjectSchema } from './TodoUpdateWithoutOwnerInput.schema';
import { TodoUncheckedUpdateWithoutOwnerInputObjectSchema as TodoUncheckedUpdateWithoutOwnerInputObjectSchema } from './TodoUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutOwnerInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutOwnerInput>;
export const TodoUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

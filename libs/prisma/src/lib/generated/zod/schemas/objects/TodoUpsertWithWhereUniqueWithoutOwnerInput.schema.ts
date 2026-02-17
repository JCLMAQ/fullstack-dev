import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutOwnerInputObjectSchema as TodoUpdateWithoutOwnerInputObjectSchema } from './TodoUpdateWithoutOwnerInput.schema';
import { TodoUncheckedUpdateWithoutOwnerInputObjectSchema as TodoUncheckedUpdateWithoutOwnerInputObjectSchema } from './TodoUncheckedUpdateWithoutOwnerInput.schema';
import { TodoCreateWithoutOwnerInputObjectSchema as TodoCreateWithoutOwnerInputObjectSchema } from './TodoCreateWithoutOwnerInput.schema';
import { TodoUncheckedCreateWithoutOwnerInputObjectSchema as TodoUncheckedCreateWithoutOwnerInputObjectSchema } from './TodoUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutOwnerInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutOwnerInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutOwnerInput>;
export const TodoUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

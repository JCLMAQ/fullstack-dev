import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutOwnerInputObjectSchema as TodoCreateWithoutOwnerInputObjectSchema } from './TodoCreateWithoutOwnerInput.schema';
import { TodoUncheckedCreateWithoutOwnerInputObjectSchema as TodoUncheckedCreateWithoutOwnerInputObjectSchema } from './TodoUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutOwnerInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutOwnerInput>;
export const TodoCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();

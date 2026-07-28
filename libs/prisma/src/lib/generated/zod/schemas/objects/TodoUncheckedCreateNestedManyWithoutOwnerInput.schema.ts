import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutOwnerInputObjectSchema as TodoCreateWithoutOwnerInputObjectSchema } from './TodoCreateWithoutOwnerInput.schema';
import { TodoUncheckedCreateWithoutOwnerInputObjectSchema as TodoUncheckedCreateWithoutOwnerInputObjectSchema } from './TodoUncheckedCreateWithoutOwnerInput.schema';
import { TodoCreateOrConnectWithoutOwnerInputObjectSchema as TodoCreateOrConnectWithoutOwnerInputObjectSchema } from './TodoCreateOrConnectWithoutOwnerInput.schema';
import { TodoCreateManyOwnerInputEnvelopeObjectSchema as TodoCreateManyOwnerInputEnvelopeObjectSchema } from './TodoCreateManyOwnerInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutOwnerInputObjectSchema), z.lazy(() => TodoCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutOwnerInput>;
export const TodoUncheckedCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();

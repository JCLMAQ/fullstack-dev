import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutOrgInputObjectSchema as TodoCreateWithoutOrgInputObjectSchema } from './TodoCreateWithoutOrgInput.schema';
import { TodoUncheckedCreateWithoutOrgInputObjectSchema as TodoUncheckedCreateWithoutOrgInputObjectSchema } from './TodoUncheckedCreateWithoutOrgInput.schema';
import { TodoCreateOrConnectWithoutOrgInputObjectSchema as TodoCreateOrConnectWithoutOrgInputObjectSchema } from './TodoCreateOrConnectWithoutOrgInput.schema';
import { TodoCreateManyOrgInputEnvelopeObjectSchema as TodoCreateManyOrgInputEnvelopeObjectSchema } from './TodoCreateManyOrgInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutOrgInput>;
export const TodoUncheckedCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();

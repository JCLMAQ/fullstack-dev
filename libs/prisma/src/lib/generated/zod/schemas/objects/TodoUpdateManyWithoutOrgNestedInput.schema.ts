import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateWithoutOrgInputObjectSchema as TodoCreateWithoutOrgInputObjectSchema } from './TodoCreateWithoutOrgInput.schema';
import { TodoUncheckedCreateWithoutOrgInputObjectSchema as TodoUncheckedCreateWithoutOrgInputObjectSchema } from './TodoUncheckedCreateWithoutOrgInput.schema';
import { TodoCreateOrConnectWithoutOrgInputObjectSchema as TodoCreateOrConnectWithoutOrgInputObjectSchema } from './TodoCreateOrConnectWithoutOrgInput.schema';
import { TodoUpsertWithWhereUniqueWithoutOrgInputObjectSchema as TodoUpsertWithWhereUniqueWithoutOrgInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutOrgInput.schema';
import { TodoCreateManyOrgInputEnvelopeObjectSchema as TodoCreateManyOrgInputEnvelopeObjectSchema } from './TodoCreateManyOrgInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutOrgInputObjectSchema as TodoUpdateWithWhereUniqueWithoutOrgInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutOrgInput.schema';
import { TodoUpdateManyWithWhereWithoutOrgInputObjectSchema as TodoUpdateManyWithWhereWithoutOrgInputObjectSchema } from './TodoUpdateManyWithWhereWithoutOrgInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyOrgInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutOrgInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutOrgInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutOrgInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutOrgInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUpdateManyWithoutOrgNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithoutOrgNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithoutOrgNestedInput>;
export const TodoUpdateManyWithoutOrgNestedInputObjectZodSchema = makeSchema();

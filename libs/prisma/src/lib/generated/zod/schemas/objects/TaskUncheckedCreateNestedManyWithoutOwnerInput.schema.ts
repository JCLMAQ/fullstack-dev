import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutOwnerInputObjectSchema as TaskCreateWithoutOwnerInputObjectSchema } from './TaskCreateWithoutOwnerInput.schema';
import { TaskUncheckedCreateWithoutOwnerInputObjectSchema as TaskUncheckedCreateWithoutOwnerInputObjectSchema } from './TaskUncheckedCreateWithoutOwnerInput.schema';
import { TaskCreateOrConnectWithoutOwnerInputObjectSchema as TaskCreateOrConnectWithoutOwnerInputObjectSchema } from './TaskCreateOrConnectWithoutOwnerInput.schema';
import { TaskCreateManyOwnerInputEnvelopeObjectSchema as TaskCreateManyOwnerInputEnvelopeObjectSchema } from './TaskCreateManyOwnerInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutOwnerInput>;
export const TaskUncheckedCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskCreateWithoutOrgInputObjectSchema as TaskCreateWithoutOrgInputObjectSchema } from './TaskCreateWithoutOrgInput.schema';
import { TaskUncheckedCreateWithoutOrgInputObjectSchema as TaskUncheckedCreateWithoutOrgInputObjectSchema } from './TaskUncheckedCreateWithoutOrgInput.schema';
import { TaskCreateOrConnectWithoutOrgInputObjectSchema as TaskCreateOrConnectWithoutOrgInputObjectSchema } from './TaskCreateOrConnectWithoutOrgInput.schema';
import { TaskCreateManyOrgInputEnvelopeObjectSchema as TaskCreateManyOrgInputEnvelopeObjectSchema } from './TaskCreateManyOrgInputEnvelope.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskCreateWithoutOrgInputObjectSchema).array(), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskCreateOrConnectWithoutOrgInputObjectSchema), z.lazy(() => TaskCreateOrConnectWithoutOrgInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskCreateManyOrgInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskWhereUniqueInputObjectSchema), z.lazy(() => TaskWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskUncheckedCreateNestedManyWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutOrgInput>;
export const TaskUncheckedCreateNestedManyWithoutOrgInputObjectZodSchema = makeSchema();

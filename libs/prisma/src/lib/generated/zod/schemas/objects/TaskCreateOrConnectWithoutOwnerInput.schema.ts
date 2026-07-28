import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutOwnerInputObjectSchema as TaskCreateWithoutOwnerInputObjectSchema } from './TaskCreateWithoutOwnerInput.schema';
import { TaskUncheckedCreateWithoutOwnerInputObjectSchema as TaskUncheckedCreateWithoutOwnerInputObjectSchema } from './TaskUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutOwnerInput>;
export const TaskCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();

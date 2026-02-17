import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutOwnerInputObjectSchema as TaskUpdateWithoutOwnerInputObjectSchema } from './TaskUpdateWithoutOwnerInput.schema';
import { TaskUncheckedUpdateWithoutOwnerInputObjectSchema as TaskUncheckedUpdateWithoutOwnerInputObjectSchema } from './TaskUncheckedUpdateWithoutOwnerInput.schema';
import { TaskCreateWithoutOwnerInputObjectSchema as TaskCreateWithoutOwnerInputObjectSchema } from './TaskCreateWithoutOwnerInput.schema';
import { TaskUncheckedCreateWithoutOwnerInputObjectSchema as TaskUncheckedCreateWithoutOwnerInputObjectSchema } from './TaskUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutOwnerInput>;
export const TaskUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

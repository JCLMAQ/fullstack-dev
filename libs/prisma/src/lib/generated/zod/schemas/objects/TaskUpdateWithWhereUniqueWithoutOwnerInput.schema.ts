import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutOwnerInputObjectSchema as TaskUpdateWithoutOwnerInputObjectSchema } from './TaskUpdateWithoutOwnerInput.schema';
import { TaskUncheckedUpdateWithoutOwnerInputObjectSchema as TaskUncheckedUpdateWithoutOwnerInputObjectSchema } from './TaskUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutOwnerInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutOwnerInput>;
export const TaskUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

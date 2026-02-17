import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutOrgInputObjectSchema as TaskUpdateWithoutOrgInputObjectSchema } from './TaskUpdateWithoutOrgInput.schema';
import { TaskUncheckedUpdateWithoutOrgInputObjectSchema as TaskUncheckedUpdateWithoutOrgInputObjectSchema } from './TaskUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TaskUpdateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const TaskUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutOrgInput>;
export const TaskUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

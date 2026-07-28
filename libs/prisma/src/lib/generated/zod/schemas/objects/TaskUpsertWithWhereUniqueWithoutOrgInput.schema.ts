import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateWithoutOrgInputObjectSchema as TaskUpdateWithoutOrgInputObjectSchema } from './TaskUpdateWithoutOrgInput.schema';
import { TaskUncheckedUpdateWithoutOrgInputObjectSchema as TaskUncheckedUpdateWithoutOrgInputObjectSchema } from './TaskUncheckedUpdateWithoutOrgInput.schema';
import { TaskCreateWithoutOrgInputObjectSchema as TaskCreateWithoutOrgInputObjectSchema } from './TaskCreateWithoutOrgInput.schema';
import { TaskUncheckedCreateWithoutOrgInputObjectSchema as TaskUncheckedCreateWithoutOrgInputObjectSchema } from './TaskUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TaskUpdateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const TaskUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutOrgInput>;
export const TaskUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

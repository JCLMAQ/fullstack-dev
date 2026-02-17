import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutOrgInputObjectSchema as TaskCreateWithoutOrgInputObjectSchema } from './TaskCreateWithoutOrgInput.schema';
import { TaskUncheckedCreateWithoutOrgInputObjectSchema as TaskUncheckedCreateWithoutOrgInputObjectSchema } from './TaskUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutOrgInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutOrgInput>;
export const TaskCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();

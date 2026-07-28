import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutTasksInputObjectSchema as GroupCreateWithoutTasksInputObjectSchema } from './GroupCreateWithoutTasksInput.schema';
import { GroupUncheckedCreateWithoutTasksInputObjectSchema as GroupUncheckedCreateWithoutTasksInputObjectSchema } from './GroupUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutTasksInput>;
export const GroupCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutTasksInputObjectSchema as GroupCreateWithoutTasksInputObjectSchema } from './GroupCreateWithoutTasksInput.schema';
import { GroupUncheckedCreateWithoutTasksInputObjectSchema as GroupUncheckedCreateWithoutTasksInputObjectSchema } from './GroupUncheckedCreateWithoutTasksInput.schema';
import { GroupCreateOrConnectWithoutTasksInputObjectSchema as GroupCreateOrConnectWithoutTasksInputObjectSchema } from './GroupCreateOrConnectWithoutTasksInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutTasksInput>;
export const GroupUncheckedCreateNestedManyWithoutTasksInputObjectZodSchema = makeSchema();

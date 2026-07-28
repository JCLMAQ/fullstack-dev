import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutTasksInputObjectSchema as GroupCreateWithoutTasksInputObjectSchema } from './GroupCreateWithoutTasksInput.schema';
import { GroupUncheckedCreateWithoutTasksInputObjectSchema as GroupUncheckedCreateWithoutTasksInputObjectSchema } from './GroupUncheckedCreateWithoutTasksInput.schema';
import { GroupCreateOrConnectWithoutTasksInputObjectSchema as GroupCreateOrConnectWithoutTasksInputObjectSchema } from './GroupCreateOrConnectWithoutTasksInput.schema';
import { GroupUpsertWithWhereUniqueWithoutTasksInputObjectSchema as GroupUpsertWithWhereUniqueWithoutTasksInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutTasksInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutTasksInputObjectSchema as GroupUpdateWithWhereUniqueWithoutTasksInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutTasksInput.schema';
import { GroupUpdateManyWithWhereWithoutTasksInputObjectSchema as GroupUpdateManyWithWhereWithoutTasksInputObjectSchema } from './GroupUpdateManyWithWhereWithoutTasksInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutTasksInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutTasksInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUpdateManyWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithoutTasksNestedInput>;
export const GroupUpdateManyWithoutTasksNestedInputObjectZodSchema = makeSchema();

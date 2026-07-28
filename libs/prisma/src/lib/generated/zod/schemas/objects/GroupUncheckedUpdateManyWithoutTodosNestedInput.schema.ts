import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutTodosInputObjectSchema as GroupCreateWithoutTodosInputObjectSchema } from './GroupCreateWithoutTodosInput.schema';
import { GroupUncheckedCreateWithoutTodosInputObjectSchema as GroupUncheckedCreateWithoutTodosInputObjectSchema } from './GroupUncheckedCreateWithoutTodosInput.schema';
import { GroupCreateOrConnectWithoutTodosInputObjectSchema as GroupCreateOrConnectWithoutTodosInputObjectSchema } from './GroupCreateOrConnectWithoutTodosInput.schema';
import { GroupUpsertWithWhereUniqueWithoutTodosInputObjectSchema as GroupUpsertWithWhereUniqueWithoutTodosInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutTodosInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutTodosInputObjectSchema as GroupUpdateWithWhereUniqueWithoutTodosInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutTodosInput.schema';
import { GroupUpdateManyWithWhereWithoutTodosInputObjectSchema as GroupUpdateManyWithWhereWithoutTodosInputObjectSchema } from './GroupUpdateManyWithWhereWithoutTodosInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupCreateWithoutTodosInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTodosInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTodosInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutTodosInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutTodosInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutTodosInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutTodosInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutTodosInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutTodosInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedUpdateManyWithoutTodosNestedInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutTodosNestedInput>;
export const GroupUncheckedUpdateManyWithoutTodosNestedInputObjectZodSchema = makeSchema();

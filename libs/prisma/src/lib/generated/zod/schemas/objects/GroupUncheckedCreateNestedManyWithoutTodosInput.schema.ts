import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutTodosInputObjectSchema as GroupCreateWithoutTodosInputObjectSchema } from './GroupCreateWithoutTodosInput.schema';
import { GroupUncheckedCreateWithoutTodosInputObjectSchema as GroupUncheckedCreateWithoutTodosInputObjectSchema } from './GroupUncheckedCreateWithoutTodosInput.schema';
import { GroupCreateOrConnectWithoutTodosInputObjectSchema as GroupCreateOrConnectWithoutTodosInputObjectSchema } from './GroupCreateOrConnectWithoutTodosInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupCreateWithoutTodosInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTodosInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTodosInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedCreateNestedManyWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutTodosInput>;
export const GroupUncheckedCreateNestedManyWithoutTodosInputObjectZodSchema = makeSchema();

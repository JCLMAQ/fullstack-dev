import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupCreateWithoutTodosInputObjectSchema as GroupCreateWithoutTodosInputObjectSchema } from './GroupCreateWithoutTodosInput.schema';
import { GroupUncheckedCreateWithoutTodosInputObjectSchema as GroupUncheckedCreateWithoutTodosInputObjectSchema } from './GroupUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupCreateWithoutTodosInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const GroupCreateOrConnectWithoutTodosInputObjectSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateOrConnectWithoutTodosInput>;
export const GroupCreateOrConnectWithoutTodosInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTasksInputObjectSchema as GroupUpdateWithoutTasksInputObjectSchema } from './GroupUpdateWithoutTasksInput.schema';
import { GroupUncheckedUpdateWithoutTasksInputObjectSchema as GroupUncheckedUpdateWithoutTasksInputObjectSchema } from './GroupUncheckedUpdateWithoutTasksInput.schema';
import { GroupCreateWithoutTasksInputObjectSchema as GroupCreateWithoutTasksInputObjectSchema } from './GroupCreateWithoutTasksInput.schema';
import { GroupUncheckedCreateWithoutTasksInputObjectSchema as GroupUncheckedCreateWithoutTasksInputObjectSchema } from './GroupUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTasksInput>;
export const GroupUpsertWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();

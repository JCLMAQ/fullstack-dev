import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTasksInputObjectSchema as GroupUpdateWithoutTasksInputObjectSchema } from './GroupUpdateWithoutTasksInput.schema';
import { GroupUncheckedUpdateWithoutTasksInputObjectSchema as GroupUncheckedUpdateWithoutTasksInputObjectSchema } from './GroupUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutTasksInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTasksInput>;
export const GroupUpdateWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();

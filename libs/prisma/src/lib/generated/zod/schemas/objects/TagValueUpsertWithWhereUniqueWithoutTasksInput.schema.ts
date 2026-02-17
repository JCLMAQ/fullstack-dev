import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTasksInputObjectSchema as TagValueUpdateWithoutTasksInputObjectSchema } from './TagValueUpdateWithoutTasksInput.schema';
import { TagValueUncheckedUpdateWithoutTasksInputObjectSchema as TagValueUncheckedUpdateWithoutTasksInputObjectSchema } from './TagValueUncheckedUpdateWithoutTasksInput.schema';
import { TagValueCreateWithoutTasksInputObjectSchema as TagValueCreateWithoutTasksInputObjectSchema } from './TagValueCreateWithoutTasksInput.schema';
import { TagValueUncheckedCreateWithoutTasksInputObjectSchema as TagValueUncheckedCreateWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutTasksInput>;
export const TagValueUpsertWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutTasksInputObjectSchema as TagValueUpdateWithoutTasksInputObjectSchema } from './TagValueUpdateWithoutTasksInput.schema';
import { TagValueUncheckedUpdateWithoutTasksInputObjectSchema as TagValueUncheckedUpdateWithoutTasksInputObjectSchema } from './TagValueUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutTasksInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutTasksInput>;
export const TagValueUpdateWithWhereUniqueWithoutTasksInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueCreateWithoutTasksInputObjectSchema as TagValueCreateWithoutTasksInputObjectSchema } from './TagValueCreateWithoutTasksInput.schema';
import { TagValueUncheckedCreateWithoutTasksInputObjectSchema as TagValueUncheckedCreateWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const TagValueCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.TagValueCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateOrConnectWithoutTasksInput>;
export const TagValueCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutTasksInputObjectSchema as TagValueCreateWithoutTasksInputObjectSchema } from './TagValueCreateWithoutTasksInput.schema';
import { TagValueUncheckedCreateWithoutTasksInputObjectSchema as TagValueUncheckedCreateWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateWithoutTasksInput.schema';
import { TagValueCreateOrConnectWithoutTasksInputObjectSchema as TagValueCreateOrConnectWithoutTasksInputObjectSchema } from './TagValueCreateOrConnectWithoutTasksInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutTasksInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutTasksInput>;
export const TagValueCreateNestedManyWithoutTasksInputObjectZodSchema = makeSchema();

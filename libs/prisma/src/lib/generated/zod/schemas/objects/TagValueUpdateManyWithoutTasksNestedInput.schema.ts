import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutTasksInputObjectSchema as TagValueCreateWithoutTasksInputObjectSchema } from './TagValueCreateWithoutTasksInput.schema';
import { TagValueUncheckedCreateWithoutTasksInputObjectSchema as TagValueUncheckedCreateWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateWithoutTasksInput.schema';
import { TagValueCreateOrConnectWithoutTasksInputObjectSchema as TagValueCreateOrConnectWithoutTasksInputObjectSchema } from './TagValueCreateOrConnectWithoutTasksInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutTasksInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutTasksInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutTasksInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutTasksInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutTasksInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutTasksInput.schema';
import { TagValueUpdateManyWithWhereWithoutTasksInputObjectSchema as TagValueUpdateManyWithWhereWithoutTasksInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutTasksInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutTasksInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutTasksInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUpdateManyWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithoutTasksNestedInput>;
export const TagValueUpdateManyWithoutTasksNestedInputObjectZodSchema = makeSchema();

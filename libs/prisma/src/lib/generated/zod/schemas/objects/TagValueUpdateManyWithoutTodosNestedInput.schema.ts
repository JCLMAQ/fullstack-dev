import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutTodosInputObjectSchema as TagValueCreateWithoutTodosInputObjectSchema } from './TagValueCreateWithoutTodosInput.schema';
import { TagValueUncheckedCreateWithoutTodosInputObjectSchema as TagValueUncheckedCreateWithoutTodosInputObjectSchema } from './TagValueUncheckedCreateWithoutTodosInput.schema';
import { TagValueCreateOrConnectWithoutTodosInputObjectSchema as TagValueCreateOrConnectWithoutTodosInputObjectSchema } from './TagValueCreateOrConnectWithoutTodosInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutTodosInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutTodosInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutTodosInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutTodosInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutTodosInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutTodosInput.schema';
import { TagValueUpdateManyWithWhereWithoutTodosInputObjectSchema as TagValueUpdateManyWithWhereWithoutTodosInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutTodosInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueCreateWithoutTodosInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutTodosInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutTodosInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutTodosInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTodosInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutTodosInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTodosInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutTodosInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutTodosInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutTodosInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUpdateManyWithoutTodosNestedInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithoutTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithoutTodosNestedInput>;
export const TagValueUpdateManyWithoutTodosNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateWithoutGroupsInputObjectSchema as TagValueCreateWithoutGroupsInputObjectSchema } from './TagValueCreateWithoutGroupsInput.schema';
import { TagValueUncheckedCreateWithoutGroupsInputObjectSchema as TagValueUncheckedCreateWithoutGroupsInputObjectSchema } from './TagValueUncheckedCreateWithoutGroupsInput.schema';
import { TagValueCreateOrConnectWithoutGroupsInputObjectSchema as TagValueCreateOrConnectWithoutGroupsInputObjectSchema } from './TagValueCreateOrConnectWithoutGroupsInput.schema';
import { TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectSchema as TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectSchema } from './TagValueUpsertWithWhereUniqueWithoutGroupsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectSchema as TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectSchema } from './TagValueUpdateWithWhereUniqueWithoutGroupsInput.schema';
import { TagValueUpdateManyWithWhereWithoutGroupsInputObjectSchema as TagValueUpdateManyWithWhereWithoutGroupsInputObjectSchema } from './TagValueUpdateManyWithWhereWithoutGroupsInput.schema';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TagValueUpdateManyWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUpdateManyWithWhereWithoutGroupsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TagValueScalarWhereInputObjectSchema), z.lazy(() => TagValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TagValueUncheckedUpdateManyWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedUpdateManyWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedUpdateManyWithoutGroupsNestedInput>;
export const TagValueUncheckedUpdateManyWithoutGroupsNestedInputObjectZodSchema = makeSchema();

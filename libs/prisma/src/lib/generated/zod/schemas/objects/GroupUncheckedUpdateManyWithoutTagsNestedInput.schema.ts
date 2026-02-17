import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupCreateWithoutTagsInputObjectSchema as GroupCreateWithoutTagsInputObjectSchema } from './GroupCreateWithoutTagsInput.schema';
import { GroupUncheckedCreateWithoutTagsInputObjectSchema as GroupUncheckedCreateWithoutTagsInputObjectSchema } from './GroupUncheckedCreateWithoutTagsInput.schema';
import { GroupCreateOrConnectWithoutTagsInputObjectSchema as GroupCreateOrConnectWithoutTagsInputObjectSchema } from './GroupCreateOrConnectWithoutTagsInput.schema';
import { GroupUpsertWithWhereUniqueWithoutTagsInputObjectSchema as GroupUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutTagsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutTagsInputObjectSchema as GroupUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutTagsInput.schema';
import { GroupUpdateManyWithWhereWithoutTagsInputObjectSchema as GroupUpdateManyWithWhereWithoutTagsInputObjectSchema } from './GroupUpdateManyWithWhereWithoutTagsInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutTagsNestedInput>;
export const GroupUncheckedUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();

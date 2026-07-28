import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutPostsInputObjectSchema as GroupCreateWithoutPostsInputObjectSchema } from './GroupCreateWithoutPostsInput.schema';
import { GroupUncheckedCreateWithoutPostsInputObjectSchema as GroupUncheckedCreateWithoutPostsInputObjectSchema } from './GroupUncheckedCreateWithoutPostsInput.schema';
import { GroupCreateOrConnectWithoutPostsInputObjectSchema as GroupCreateOrConnectWithoutPostsInputObjectSchema } from './GroupCreateOrConnectWithoutPostsInput.schema';
import { GroupUpsertWithWhereUniqueWithoutPostsInputObjectSchema as GroupUpsertWithWhereUniqueWithoutPostsInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutPostsInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutPostsInputObjectSchema as GroupUpdateWithWhereUniqueWithoutPostsInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutPostsInput.schema';
import { GroupUpdateManyWithWhereWithoutPostsInputObjectSchema as GroupUpdateManyWithWhereWithoutPostsInputObjectSchema } from './GroupUpdateManyWithWhereWithoutPostsInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutPostsInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutPostsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUpdateManyWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithoutPostsNestedInput>;
export const GroupUpdateManyWithoutPostsNestedInputObjectZodSchema = makeSchema();

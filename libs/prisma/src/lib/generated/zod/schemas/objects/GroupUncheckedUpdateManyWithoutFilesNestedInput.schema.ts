import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateWithoutFilesInputObjectSchema as GroupCreateWithoutFilesInputObjectSchema } from './GroupCreateWithoutFilesInput.schema';
import { GroupUncheckedCreateWithoutFilesInputObjectSchema as GroupUncheckedCreateWithoutFilesInputObjectSchema } from './GroupUncheckedCreateWithoutFilesInput.schema';
import { GroupCreateOrConnectWithoutFilesInputObjectSchema as GroupCreateOrConnectWithoutFilesInputObjectSchema } from './GroupCreateOrConnectWithoutFilesInput.schema';
import { GroupUpsertWithWhereUniqueWithoutFilesInputObjectSchema as GroupUpsertWithWhereUniqueWithoutFilesInputObjectSchema } from './GroupUpsertWithWhereUniqueWithoutFilesInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithWhereUniqueWithoutFilesInputObjectSchema as GroupUpdateWithWhereUniqueWithoutFilesInputObjectSchema } from './GroupUpdateWithWhereUniqueWithoutFilesInput.schema';
import { GroupUpdateManyWithWhereWithoutFilesInputObjectSchema as GroupUpdateManyWithWhereWithoutFilesInputObjectSchema } from './GroupUpdateManyWithWhereWithoutFilesInput.schema';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => GroupCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GroupUpsertWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => GroupUpsertWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GroupWhereUniqueInputObjectSchema), z.lazy(() => GroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GroupUpdateWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => GroupUpdateWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GroupUpdateManyWithWhereWithoutFilesInputObjectSchema), z.lazy(() => GroupUpdateManyWithWhereWithoutFilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GroupUncheckedUpdateManyWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutFilesNestedInput>;
export const GroupUncheckedUpdateManyWithoutFilesNestedInputObjectZodSchema = makeSchema();

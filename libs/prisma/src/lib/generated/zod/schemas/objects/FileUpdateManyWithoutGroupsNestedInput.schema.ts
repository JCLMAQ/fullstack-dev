import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutGroupsInputObjectSchema as FileCreateWithoutGroupsInputObjectSchema } from './FileCreateWithoutGroupsInput.schema';
import { FileUncheckedCreateWithoutGroupsInputObjectSchema as FileUncheckedCreateWithoutGroupsInputObjectSchema } from './FileUncheckedCreateWithoutGroupsInput.schema';
import { FileCreateOrConnectWithoutGroupsInputObjectSchema as FileCreateOrConnectWithoutGroupsInputObjectSchema } from './FileCreateOrConnectWithoutGroupsInput.schema';
import { FileUpsertWithWhereUniqueWithoutGroupsInputObjectSchema as FileUpsertWithWhereUniqueWithoutGroupsInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutGroupsInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutGroupsInputObjectSchema as FileUpdateWithWhereUniqueWithoutGroupsInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutGroupsInput.schema';
import { FileUpdateManyWithWhereWithoutGroupsInputObjectSchema as FileUpdateManyWithWhereWithoutGroupsInputObjectSchema } from './FileUpdateManyWithWhereWithoutGroupsInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutGroupsInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutGroupsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutGroupsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutGroupsNestedInput>;
export const FileUpdateManyWithoutGroupsNestedInputObjectZodSchema = makeSchema();

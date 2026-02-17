import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateWithoutTagsInputObjectSchema as FileCreateWithoutTagsInputObjectSchema } from './FileCreateWithoutTagsInput.schema';
import { FileUncheckedCreateWithoutTagsInputObjectSchema as FileUncheckedCreateWithoutTagsInputObjectSchema } from './FileUncheckedCreateWithoutTagsInput.schema';
import { FileCreateOrConnectWithoutTagsInputObjectSchema as FileCreateOrConnectWithoutTagsInputObjectSchema } from './FileCreateOrConnectWithoutTagsInput.schema';
import { FileUpsertWithWhereUniqueWithoutTagsInputObjectSchema as FileUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutTagsInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutTagsInputObjectSchema as FileUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutTagsInput.schema';
import { FileUpdateManyWithWhereWithoutTagsInputObjectSchema as FileUpdateManyWithWhereWithoutTagsInputObjectSchema } from './FileUpdateManyWithWhereWithoutTagsInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutTagsInputObjectSchema), z.lazy(() => FileCreateWithoutTagsInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutTagsInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutTagsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutTagsInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutTagsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutTagsInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutTagsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUpdateManyWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithoutTagsNestedInput>;
export const FileUpdateManyWithoutTagsNestedInputObjectZodSchema = makeSchema();

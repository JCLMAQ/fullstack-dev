import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutUploadedByInputObjectSchema as FileCreateWithoutUploadedByInputObjectSchema } from './FileCreateWithoutUploadedByInput.schema';
import { FileUncheckedCreateWithoutUploadedByInputObjectSchema as FileUncheckedCreateWithoutUploadedByInputObjectSchema } from './FileUncheckedCreateWithoutUploadedByInput.schema';
import { FileCreateOrConnectWithoutUploadedByInputObjectSchema as FileCreateOrConnectWithoutUploadedByInputObjectSchema } from './FileCreateOrConnectWithoutUploadedByInput.schema';
import { FileUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema as FileUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutUploadedByInput.schema';
import { FileCreateManyUploadedByInputEnvelopeObjectSchema as FileCreateManyUploadedByInputEnvelopeObjectSchema } from './FileCreateManyUploadedByInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema as FileUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutUploadedByInput.schema';
import { FileUpdateManyWithWhereWithoutUploadedByInputObjectSchema as FileUpdateManyWithWhereWithoutUploadedByInputObjectSchema } from './FileUpdateManyWithWhereWithoutUploadedByInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutUploadedByInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutUploadedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyUploadedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutUploadedByInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutUploadedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedUpdateManyWithoutUploadedByNestedInputObjectSchema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUploadedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUploadedByNestedInput>;
export const FileUncheckedUpdateManyWithoutUploadedByNestedInputObjectZodSchema = makeSchema();

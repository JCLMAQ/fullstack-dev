import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutUploadedByInputObjectSchema as FileUpdateWithoutUploadedByInputObjectSchema } from './FileUpdateWithoutUploadedByInput.schema';
import { FileUncheckedUpdateWithoutUploadedByInputObjectSchema as FileUncheckedUpdateWithoutUploadedByInputObjectSchema } from './FileUncheckedUpdateWithoutUploadedByInput.schema';
import { FileCreateWithoutUploadedByInputObjectSchema as FileCreateWithoutUploadedByInputObjectSchema } from './FileCreateWithoutUploadedByInput.schema';
import { FileUncheckedCreateWithoutUploadedByInputObjectSchema as FileUncheckedCreateWithoutUploadedByInputObjectSchema } from './FileUncheckedCreateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUploadedByInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutUploadedByInput>;
export const FileUpsertWithWhereUniqueWithoutUploadedByInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutUploadedByInputObjectSchema as FileUpdateWithoutUploadedByInputObjectSchema } from './FileUpdateWithoutUploadedByInput.schema';
import { FileUncheckedUpdateWithoutUploadedByInputObjectSchema as FileUncheckedUpdateWithoutUploadedByInputObjectSchema } from './FileUncheckedUpdateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUploadedByInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutUploadedByInput>;
export const FileUpdateWithWhereUniqueWithoutUploadedByInputObjectZodSchema = makeSchema();

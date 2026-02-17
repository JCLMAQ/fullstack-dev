import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutUploadedByInputObjectSchema as FileCreateWithoutUploadedByInputObjectSchema } from './FileCreateWithoutUploadedByInput.schema';
import { FileUncheckedCreateWithoutUploadedByInputObjectSchema as FileUncheckedCreateWithoutUploadedByInputObjectSchema } from './FileUncheckedCreateWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutUploadedByInput>;
export const FileCreateOrConnectWithoutUploadedByInputObjectZodSchema = makeSchema();

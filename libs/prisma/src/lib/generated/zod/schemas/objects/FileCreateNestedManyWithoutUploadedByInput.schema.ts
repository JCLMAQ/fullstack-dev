import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateWithoutUploadedByInputObjectSchema as FileCreateWithoutUploadedByInputObjectSchema } from './FileCreateWithoutUploadedByInput.schema';
import { FileUncheckedCreateWithoutUploadedByInputObjectSchema as FileUncheckedCreateWithoutUploadedByInputObjectSchema } from './FileUncheckedCreateWithoutUploadedByInput.schema';
import { FileCreateOrConnectWithoutUploadedByInputObjectSchema as FileCreateOrConnectWithoutUploadedByInputObjectSchema } from './FileCreateOrConnectWithoutUploadedByInput.schema';
import { FileCreateManyUploadedByInputEnvelopeObjectSchema as FileCreateManyUploadedByInputEnvelopeObjectSchema } from './FileCreateManyUploadedByInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileCreateWithoutUploadedByInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUploadedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutUploadedByInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutUploadedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyUploadedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileCreateNestedManyWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedManyWithoutUploadedByInput>;
export const FileCreateNestedManyWithoutUploadedByInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
export const FileUncheckedCreateNestedManyWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutUploadedByInput>;
export const FileUncheckedCreateNestedManyWithoutUploadedByInputObjectZodSchema = makeSchema();

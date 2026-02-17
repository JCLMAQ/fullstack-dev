import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutUploadedByInputObjectSchema as FileUncheckedUpdateManyWithoutUploadedByInputObjectSchema } from './FileUncheckedUpdateManyWithoutUploadedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutUploadedByInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutUploadedByInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUploadedByInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUploadedByInput>;
export const FileUpdateManyWithWhereWithoutUploadedByInputObjectZodSchema = makeSchema();

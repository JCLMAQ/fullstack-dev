import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutTagsInputObjectSchema as FileUncheckedUpdateManyWithoutTagsInputObjectSchema } from './FileUncheckedUpdateManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutTagsInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutTagsInput>;
export const FileUpdateManyWithWhereWithoutTagsInputObjectZodSchema = makeSchema();

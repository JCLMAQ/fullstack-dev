import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutStoryInputObjectSchema as FileUncheckedUpdateManyWithoutStoryInputObjectSchema } from './FileUncheckedUpdateManyWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutStoryInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutStoryInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutStoryInput>;
export const FileUpdateManyWithWhereWithoutStoryInputObjectZodSchema = makeSchema();

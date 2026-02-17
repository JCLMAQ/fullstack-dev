import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutGroupsInputObjectSchema as FileUncheckedUpdateManyWithoutGroupsInputObjectSchema } from './FileUncheckedUpdateManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutGroupsInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutGroupsInput>;
export const FileUpdateManyWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutOwnerInputObjectSchema as FileUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './FileUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutOwnerInput>;
export const FileUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();

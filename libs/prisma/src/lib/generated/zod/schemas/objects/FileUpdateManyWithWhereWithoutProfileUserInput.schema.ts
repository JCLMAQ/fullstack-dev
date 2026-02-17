import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutProfileUserInputObjectSchema as FileUncheckedUpdateManyWithoutProfileUserInputObjectSchema } from './FileUncheckedUpdateManyWithoutProfileUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutProfileUserInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutProfileUserInput>;
export const FileUpdateManyWithWhereWithoutProfileUserInputObjectZodSchema = makeSchema();

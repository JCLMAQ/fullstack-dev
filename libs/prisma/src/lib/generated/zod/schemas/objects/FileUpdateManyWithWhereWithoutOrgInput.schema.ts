import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutOrgInputObjectSchema as FileUncheckedUpdateManyWithoutOrgInputObjectSchema } from './FileUncheckedUpdateManyWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutOrgInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutOrgInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutOrgInput>;
export const FileUpdateManyWithWhereWithoutOrgInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutTagsInputObjectSchema as FileUpdateWithoutTagsInputObjectSchema } from './FileUpdateWithoutTagsInput.schema';
import { FileUncheckedUpdateWithoutTagsInputObjectSchema as FileUncheckedUpdateWithoutTagsInputObjectSchema } from './FileUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutTagsInput>;
export const FileUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

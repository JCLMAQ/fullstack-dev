import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutTagsInputObjectSchema as FileUpdateWithoutTagsInputObjectSchema } from './FileUpdateWithoutTagsInput.schema';
import { FileUncheckedUpdateWithoutTagsInputObjectSchema as FileUncheckedUpdateWithoutTagsInputObjectSchema } from './FileUncheckedUpdateWithoutTagsInput.schema';
import { FileCreateWithoutTagsInputObjectSchema as FileCreateWithoutTagsInputObjectSchema } from './FileCreateWithoutTagsInput.schema';
import { FileUncheckedCreateWithoutTagsInputObjectSchema as FileUncheckedCreateWithoutTagsInputObjectSchema } from './FileUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutTagsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutTagsInput>;
export const FileUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

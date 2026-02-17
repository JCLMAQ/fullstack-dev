import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutStoryInputObjectSchema as FileUpdateWithoutStoryInputObjectSchema } from './FileUpdateWithoutStoryInput.schema';
import { FileUncheckedUpdateWithoutStoryInputObjectSchema as FileUncheckedUpdateWithoutStoryInputObjectSchema } from './FileUncheckedUpdateWithoutStoryInput.schema';
import { FileCreateWithoutStoryInputObjectSchema as FileCreateWithoutStoryInputObjectSchema } from './FileCreateWithoutStoryInput.schema';
import { FileUncheckedCreateWithoutStoryInputObjectSchema as FileUncheckedCreateWithoutStoryInputObjectSchema } from './FileUncheckedCreateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutStoryInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutStoryInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutStoryInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutStoryInput>;
export const FileUpsertWithWhereUniqueWithoutStoryInputObjectZodSchema = makeSchema();

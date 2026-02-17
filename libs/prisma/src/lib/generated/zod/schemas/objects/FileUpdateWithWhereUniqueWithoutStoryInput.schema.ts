import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutStoryInputObjectSchema as FileUpdateWithoutStoryInputObjectSchema } from './FileUpdateWithoutStoryInput.schema';
import { FileUncheckedUpdateWithoutStoryInputObjectSchema as FileUncheckedUpdateWithoutStoryInputObjectSchema } from './FileUncheckedUpdateWithoutStoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutStoryInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutStoryInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutStoryInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutStoryInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutStoryInput>;
export const FileUpdateWithWhereUniqueWithoutStoryInputObjectZodSchema = makeSchema();

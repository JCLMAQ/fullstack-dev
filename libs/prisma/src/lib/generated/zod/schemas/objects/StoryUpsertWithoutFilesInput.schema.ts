import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryUpdateWithoutFilesInputObjectSchema as StoryUpdateWithoutFilesInputObjectSchema } from './StoryUpdateWithoutFilesInput.schema';
import { StoryUncheckedUpdateWithoutFilesInputObjectSchema as StoryUncheckedUpdateWithoutFilesInputObjectSchema } from './StoryUncheckedUpdateWithoutFilesInput.schema';
import { StoryCreateWithoutFilesInputObjectSchema as StoryCreateWithoutFilesInputObjectSchema } from './StoryCreateWithoutFilesInput.schema';
import { StoryUncheckedCreateWithoutFilesInputObjectSchema as StoryUncheckedCreateWithoutFilesInputObjectSchema } from './StoryUncheckedCreateWithoutFilesInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoryUpdateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => StoryCreateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => StoryWhereInputObjectSchema).optional()
}).strict();
export const StoryUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.StoryUpsertWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpsertWithoutFilesInput>;
export const StoryUpsertWithoutFilesInputObjectZodSchema = makeSchema();

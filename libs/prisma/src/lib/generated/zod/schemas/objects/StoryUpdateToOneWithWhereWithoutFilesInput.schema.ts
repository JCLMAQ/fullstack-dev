import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema';
import { StoryUpdateWithoutFilesInputObjectSchema as StoryUpdateWithoutFilesInputObjectSchema } from './StoryUpdateWithoutFilesInput.schema';
import { StoryUncheckedUpdateWithoutFilesInputObjectSchema as StoryUncheckedUpdateWithoutFilesInputObjectSchema } from './StoryUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoryUpdateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const StoryUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.StoryUpdateToOneWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateToOneWithWhereWithoutFilesInput>;
export const StoryUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutFilesInputObjectSchema as StoryCreateWithoutFilesInputObjectSchema } from './StoryCreateWithoutFilesInput.schema';
import { StoryUncheckedCreateWithoutFilesInputObjectSchema as StoryUncheckedCreateWithoutFilesInputObjectSchema } from './StoryUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoryCreateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const StoryCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.StoryCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateOrConnectWithoutFilesInput>;
export const StoryCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();

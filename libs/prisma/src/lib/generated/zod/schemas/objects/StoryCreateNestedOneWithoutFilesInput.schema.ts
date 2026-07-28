import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryCreateWithoutFilesInputObjectSchema as StoryCreateWithoutFilesInputObjectSchema } from './StoryCreateWithoutFilesInput.schema';
import { StoryUncheckedCreateWithoutFilesInputObjectSchema as StoryUncheckedCreateWithoutFilesInputObjectSchema } from './StoryUncheckedCreateWithoutFilesInput.schema';
import { StoryCreateOrConnectWithoutFilesInputObjectSchema as StoryCreateOrConnectWithoutFilesInputObjectSchema } from './StoryCreateOrConnectWithoutFilesInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoryCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.StoryCreateNestedOneWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateNestedOneWithoutFilesInput>;
export const StoryCreateNestedOneWithoutFilesInputObjectZodSchema = makeSchema();

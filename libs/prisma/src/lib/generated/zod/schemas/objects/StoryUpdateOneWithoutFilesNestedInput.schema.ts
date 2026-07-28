import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryCreateWithoutFilesInputObjectSchema as StoryCreateWithoutFilesInputObjectSchema } from './StoryCreateWithoutFilesInput.schema';
import { StoryUncheckedCreateWithoutFilesInputObjectSchema as StoryUncheckedCreateWithoutFilesInputObjectSchema } from './StoryUncheckedCreateWithoutFilesInput.schema';
import { StoryCreateOrConnectWithoutFilesInputObjectSchema as StoryCreateOrConnectWithoutFilesInputObjectSchema } from './StoryCreateOrConnectWithoutFilesInput.schema';
import { StoryUpsertWithoutFilesInputObjectSchema as StoryUpsertWithoutFilesInputObjectSchema } from './StoryUpsertWithoutFilesInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateToOneWithWhereWithoutFilesInputObjectSchema as StoryUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './StoryUpdateToOneWithWhereWithoutFilesInput.schema';
import { StoryUpdateWithoutFilesInputObjectSchema as StoryUpdateWithoutFilesInputObjectSchema } from './StoryUpdateWithoutFilesInput.schema';
import { StoryUncheckedUpdateWithoutFilesInputObjectSchema as StoryUncheckedUpdateWithoutFilesInputObjectSchema } from './StoryUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoryUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => StoryUpdateWithoutFilesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const StoryUpdateOneWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.StoryUpdateOneWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateOneWithoutFilesNestedInput>;
export const StoryUpdateOneWithoutFilesNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryCreateWithoutImagesInputObjectSchema as StoryCreateWithoutImagesInputObjectSchema } from './StoryCreateWithoutImagesInput.schema';
import { StoryUncheckedCreateWithoutImagesInputObjectSchema as StoryUncheckedCreateWithoutImagesInputObjectSchema } from './StoryUncheckedCreateWithoutImagesInput.schema';
import { StoryCreateOrConnectWithoutImagesInputObjectSchema as StoryCreateOrConnectWithoutImagesInputObjectSchema } from './StoryCreateOrConnectWithoutImagesInput.schema';
import { StoryUpsertWithoutImagesInputObjectSchema as StoryUpsertWithoutImagesInputObjectSchema } from './StoryUpsertWithoutImagesInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateToOneWithWhereWithoutImagesInputObjectSchema as StoryUpdateToOneWithWhereWithoutImagesInputObjectSchema } from './StoryUpdateToOneWithWhereWithoutImagesInput.schema';
import { StoryUpdateWithoutImagesInputObjectSchema as StoryUpdateWithoutImagesInputObjectSchema } from './StoryUpdateWithoutImagesInput.schema';
import { StoryUncheckedUpdateWithoutImagesInputObjectSchema as StoryUncheckedUpdateWithoutImagesInputObjectSchema } from './StoryUncheckedUpdateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoryCreateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoryCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => StoryUpsertWithoutImagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoryUpdateToOneWithWhereWithoutImagesInputObjectSchema), z.lazy(() => StoryUpdateWithoutImagesInputObjectSchema), z.lazy(() => StoryUncheckedUpdateWithoutImagesInputObjectSchema)]).optional()
}).strict();
export const StoryUpdateOneWithoutImagesNestedInputObjectSchema: z.ZodType<Prisma.StoryUpdateOneWithoutImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUpdateOneWithoutImagesNestedInput>;
export const StoryUpdateOneWithoutImagesNestedInputObjectZodSchema = makeSchema();

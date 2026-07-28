import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutPostsInputObjectSchema as TagValueUpdateWithoutPostsInputObjectSchema } from './TagValueUpdateWithoutPostsInput.schema';
import { TagValueUncheckedUpdateWithoutPostsInputObjectSchema as TagValueUncheckedUpdateWithoutPostsInputObjectSchema } from './TagValueUncheckedUpdateWithoutPostsInput.schema';
import { TagValueCreateWithoutPostsInputObjectSchema as TagValueCreateWithoutPostsInputObjectSchema } from './TagValueCreateWithoutPostsInput.schema';
import { TagValueUncheckedCreateWithoutPostsInputObjectSchema as TagValueUncheckedCreateWithoutPostsInputObjectSchema } from './TagValueUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutPostsInput>;
export const TagValueUpsertWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutPostsInputObjectSchema as TagValueUpdateWithoutPostsInputObjectSchema } from './TagValueUpdateWithoutPostsInput.schema';
import { TagValueUncheckedUpdateWithoutPostsInputObjectSchema as TagValueUncheckedUpdateWithoutPostsInputObjectSchema } from './TagValueUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutPostsInput>;
export const TagValueUpdateWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();

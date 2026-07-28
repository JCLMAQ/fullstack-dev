import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutMainTagInputObjectSchema as TagValueUpdateWithoutMainTagInputObjectSchema } from './TagValueUpdateWithoutMainTagInput.schema';
import { TagValueUncheckedUpdateWithoutMainTagInputObjectSchema as TagValueUncheckedUpdateWithoutMainTagInputObjectSchema } from './TagValueUncheckedUpdateWithoutMainTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutMainTagInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutMainTagInput>;
export const TagValueUpdateWithWhereUniqueWithoutMainTagInputObjectZodSchema = makeSchema();

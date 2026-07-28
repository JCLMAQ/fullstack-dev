import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutMainTagInputObjectSchema as TagValueUpdateWithoutMainTagInputObjectSchema } from './TagValueUpdateWithoutMainTagInput.schema';
import { TagValueUncheckedUpdateWithoutMainTagInputObjectSchema as TagValueUncheckedUpdateWithoutMainTagInputObjectSchema } from './TagValueUncheckedUpdateWithoutMainTagInput.schema';
import { TagValueCreateWithoutMainTagInputObjectSchema as TagValueCreateWithoutMainTagInputObjectSchema } from './TagValueCreateWithoutMainTagInput.schema';
import { TagValueUncheckedCreateWithoutMainTagInputObjectSchema as TagValueUncheckedCreateWithoutMainTagInputObjectSchema } from './TagValueUncheckedCreateWithoutMainTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutMainTagInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutMainTagInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutMainTagInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutMainTagInput>;
export const TagValueUpsertWithWhereUniqueWithoutMainTagInputObjectZodSchema = makeSchema();

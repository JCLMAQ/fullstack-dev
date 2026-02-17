import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema';
import { TagValueUpdateWithoutSubTagsInputObjectSchema as TagValueUpdateWithoutSubTagsInputObjectSchema } from './TagValueUpdateWithoutSubTagsInput.schema';
import { TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema as TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema } from './TagValueUncheckedUpdateWithoutSubTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagValueUpdateWithoutSubTagsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutSubTagsInputObjectSchema)])
}).strict();
export const TagValueUpdateToOneWithWhereWithoutSubTagsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateToOneWithWhereWithoutSubTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateToOneWithWhereWithoutSubTagsInput>;
export const TagValueUpdateToOneWithWhereWithoutSubTagsInputObjectZodSchema = makeSchema();

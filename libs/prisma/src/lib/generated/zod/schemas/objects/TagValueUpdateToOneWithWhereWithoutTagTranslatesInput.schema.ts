import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema';
import { TagValueUpdateWithoutTagTranslatesInputObjectSchema as TagValueUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUpdateWithoutTagTranslatesInput.schema';
import { TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema as TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema } from './TagValueUncheckedUpdateWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagValueUpdateWithoutTagTranslatesInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutTagTranslatesInputObjectSchema)])
}).strict();
export const TagValueUpdateToOneWithWhereWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.TagValueUpdateToOneWithWhereWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateToOneWithWhereWithoutTagTranslatesInput>;
export const TagValueUpdateToOneWithWhereWithoutTagTranslatesInputObjectZodSchema = makeSchema();

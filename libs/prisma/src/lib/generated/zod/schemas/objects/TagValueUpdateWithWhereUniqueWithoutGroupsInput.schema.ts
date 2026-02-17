import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutGroupsInputObjectSchema as TagValueUpdateWithoutGroupsInputObjectSchema } from './TagValueUpdateWithoutGroupsInput.schema';
import { TagValueUncheckedUpdateWithoutGroupsInputObjectSchema as TagValueUncheckedUpdateWithoutGroupsInputObjectSchema } from './TagValueUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateWithWhereUniqueWithoutGroupsInput>;
export const TagValueUpdateWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

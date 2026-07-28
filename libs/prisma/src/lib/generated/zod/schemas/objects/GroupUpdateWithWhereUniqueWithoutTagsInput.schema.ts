import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTagsInputObjectSchema as GroupUpdateWithoutTagsInputObjectSchema } from './GroupUpdateWithoutTagsInput.schema';
import { GroupUncheckedUpdateWithoutTagsInputObjectSchema as GroupUncheckedUpdateWithoutTagsInputObjectSchema } from './GroupUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutTagsInput>;
export const GroupUpdateWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

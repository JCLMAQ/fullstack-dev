import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema';
import { TagValueUpdateWithoutGroupsInputObjectSchema as TagValueUpdateWithoutGroupsInputObjectSchema } from './TagValueUpdateWithoutGroupsInput.schema';
import { TagValueUncheckedUpdateWithoutGroupsInputObjectSchema as TagValueUncheckedUpdateWithoutGroupsInputObjectSchema } from './TagValueUncheckedUpdateWithoutGroupsInput.schema';
import { TagValueCreateWithoutGroupsInputObjectSchema as TagValueCreateWithoutGroupsInputObjectSchema } from './TagValueCreateWithoutGroupsInput.schema';
import { TagValueUncheckedCreateWithoutGroupsInputObjectSchema as TagValueUncheckedCreateWithoutGroupsInputObjectSchema } from './TagValueUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TagValueUpdateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagValueCreateWithoutGroupsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpsertWithWhereUniqueWithoutGroupsInput>;
export const TagValueUpsertWithWhereUniqueWithoutGroupsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutTagsInputObjectSchema as GroupUpdateWithoutTagsInputObjectSchema } from './GroupUpdateWithoutTagsInput.schema';
import { GroupUncheckedUpdateWithoutTagsInputObjectSchema as GroupUncheckedUpdateWithoutTagsInputObjectSchema } from './GroupUncheckedUpdateWithoutTagsInput.schema';
import { GroupCreateWithoutTagsInputObjectSchema as GroupCreateWithoutTagsInputObjectSchema } from './GroupCreateWithoutTagsInput.schema';
import { GroupUncheckedCreateWithoutTagsInputObjectSchema as GroupUncheckedCreateWithoutTagsInputObjectSchema } from './GroupUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutTagsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutTagsInput>;
export const GroupUpsertWithWhereUniqueWithoutTagsInputObjectZodSchema = makeSchema();

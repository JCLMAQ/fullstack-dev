import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutPostsInputObjectSchema as GroupUpdateWithoutPostsInputObjectSchema } from './GroupUpdateWithoutPostsInput.schema';
import { GroupUncheckedUpdateWithoutPostsInputObjectSchema as GroupUncheckedUpdateWithoutPostsInputObjectSchema } from './GroupUncheckedUpdateWithoutPostsInput.schema';
import { GroupCreateWithoutPostsInputObjectSchema as GroupCreateWithoutPostsInputObjectSchema } from './GroupCreateWithoutPostsInput.schema';
import { GroupUncheckedCreateWithoutPostsInputObjectSchema as GroupUncheckedCreateWithoutPostsInputObjectSchema } from './GroupUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GroupUpdateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupCreateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const GroupUpsertWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutPostsInput>;
export const GroupUpsertWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './GroupWhereUniqueInput.schema';
import { GroupUpdateWithoutPostsInputObjectSchema as GroupUpdateWithoutPostsInputObjectSchema } from './GroupUpdateWithoutPostsInput.schema';
import { GroupUncheckedUpdateWithoutPostsInputObjectSchema as GroupUncheckedUpdateWithoutPostsInputObjectSchema } from './GroupUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateWithoutPostsInputObjectSchema), z.lazy(() => GroupUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const GroupUpdateWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutPostsInput>;
export const GroupUpdateWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();

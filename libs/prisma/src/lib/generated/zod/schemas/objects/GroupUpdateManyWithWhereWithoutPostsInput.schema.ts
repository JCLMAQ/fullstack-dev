import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupScalarWhereInputObjectSchema as GroupScalarWhereInputObjectSchema } from './GroupScalarWhereInput.schema';
import { GroupUpdateManyMutationInputObjectSchema as GroupUpdateManyMutationInputObjectSchema } from './GroupUpdateManyMutationInput.schema';
import { GroupUncheckedUpdateManyWithoutPostsInputObjectSchema as GroupUncheckedUpdateManyWithoutPostsInputObjectSchema } from './GroupUncheckedUpdateManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GroupUpdateManyMutationInputObjectSchema), z.lazy(() => GroupUncheckedUpdateManyWithoutPostsInputObjectSchema)])
}).strict();
export const GroupUpdateManyWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutPostsInput>;
export const GroupUpdateManyWithWhereWithoutPostsInputObjectZodSchema = makeSchema();

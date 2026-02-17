import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutPostsInputObjectSchema as TagValueUncheckedUpdateManyWithoutPostsInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutPostsInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutPostsInput>;
export const TagValueUpdateManyWithWhereWithoutPostsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueScalarWhereInputObjectSchema as TagValueScalarWhereInputObjectSchema } from './TagValueScalarWhereInput.schema';
import { TagValueUpdateManyMutationInputObjectSchema as TagValueUpdateManyMutationInputObjectSchema } from './TagValueUpdateManyMutationInput.schema';
import { TagValueUncheckedUpdateManyWithoutGroupsInputObjectSchema as TagValueUncheckedUpdateManyWithoutGroupsInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TagValueUpdateManyMutationInputObjectSchema), z.lazy(() => TagValueUncheckedUpdateManyWithoutGroupsInputObjectSchema)])
}).strict();
export const TagValueUpdateManyWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUpdateManyWithWhereWithoutGroupsInput>;
export const TagValueUpdateManyWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();

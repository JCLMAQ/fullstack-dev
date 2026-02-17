import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateWithoutPostsInputObjectSchema as TagValueCreateWithoutPostsInputObjectSchema } from './TagValueCreateWithoutPostsInput.schema';
import { TagValueUncheckedCreateWithoutPostsInputObjectSchema as TagValueUncheckedCreateWithoutPostsInputObjectSchema } from './TagValueUncheckedCreateWithoutPostsInput.schema';
import { TagValueCreateOrConnectWithoutPostsInputObjectSchema as TagValueCreateOrConnectWithoutPostsInputObjectSchema } from './TagValueCreateOrConnectWithoutPostsInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './TagValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => TagValueUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TagValueCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => TagValueCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TagValueWhereUniqueInputObjectSchema), z.lazy(() => TagValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TagValueCreateNestedManyWithoutPostsInputObjectSchema: z.ZodType<Prisma.TagValueCreateNestedManyWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateNestedManyWithoutPostsInput>;
export const TagValueCreateNestedManyWithoutPostsInputObjectZodSchema = makeSchema();

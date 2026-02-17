import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema';
import { CategoryCreateOrConnectWithoutPostsInputObjectSchema as CategoryCreateOrConnectWithoutPostsInputObjectSchema } from './CategoryCreateOrConnectWithoutPostsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CategoryCreateNestedManyWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedManyWithoutPostsInput>;
export const CategoryCreateNestedManyWithoutPostsInputObjectZodSchema = makeSchema();

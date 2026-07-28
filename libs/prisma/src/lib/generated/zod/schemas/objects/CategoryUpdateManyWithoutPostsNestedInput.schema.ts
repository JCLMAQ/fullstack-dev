import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema';
import { CategoryCreateOrConnectWithoutPostsInputObjectSchema as CategoryCreateOrConnectWithoutPostsInputObjectSchema } from './CategoryCreateOrConnectWithoutPostsInput.schema';
import { CategoryUpsertWithWhereUniqueWithoutPostsInputObjectSchema as CategoryUpsertWithWhereUniqueWithoutPostsInputObjectSchema } from './CategoryUpsertWithWhereUniqueWithoutPostsInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithWhereUniqueWithoutPostsInputObjectSchema as CategoryUpdateWithWhereUniqueWithoutPostsInputObjectSchema } from './CategoryUpdateWithWhereUniqueWithoutPostsInput.schema';
import { CategoryUpdateManyWithWhereWithoutPostsInputObjectSchema as CategoryUpdateManyWithWhereWithoutPostsInputObjectSchema } from './CategoryUpdateManyWithWhereWithoutPostsInput.schema';
import { CategoryScalarWhereInputObjectSchema as CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema).array(), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema), z.lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CategoryUpsertWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => CategoryUpsertWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CategoryUpdateWithWhereUniqueWithoutPostsInputObjectSchema), z.lazy(() => CategoryUpdateWithWhereUniqueWithoutPostsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CategoryUpdateManyWithWhereWithoutPostsInputObjectSchema), z.lazy(() => CategoryUpdateManyWithWhereWithoutPostsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CategoryScalarWhereInputObjectSchema), z.lazy(() => CategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CategoryUpdateManyWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutPostsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateManyWithoutPostsNestedInput>;
export const CategoryUpdateManyWithoutPostsNestedInputObjectZodSchema = makeSchema();

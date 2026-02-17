import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutPostsInput>;
export const CategoryCreateOrConnectWithoutPostsInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateWithoutGroupsInputObjectSchema as PostCreateWithoutGroupsInputObjectSchema } from './PostCreateWithoutGroupsInput.schema';
import { PostUncheckedCreateWithoutGroupsInputObjectSchema as PostUncheckedCreateWithoutGroupsInputObjectSchema } from './PostUncheckedCreateWithoutGroupsInput.schema';
import { PostCreateOrConnectWithoutGroupsInputObjectSchema as PostCreateOrConnectWithoutGroupsInputObjectSchema } from './PostCreateOrConnectWithoutGroupsInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostCreateWithoutGroupsInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutGroupsInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutGroupsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutGroupsInput>;
export const PostCreateNestedManyWithoutGroupsInputObjectZodSchema = makeSchema();

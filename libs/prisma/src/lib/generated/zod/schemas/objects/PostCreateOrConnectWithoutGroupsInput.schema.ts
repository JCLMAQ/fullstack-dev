import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutGroupsInputObjectSchema as PostCreateWithoutGroupsInputObjectSchema } from './PostCreateWithoutGroupsInput.schema';
import { PostUncheckedCreateWithoutGroupsInputObjectSchema as PostUncheckedCreateWithoutGroupsInputObjectSchema } from './PostUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutGroupsInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutGroupsInput>;
export const PostCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();

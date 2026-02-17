import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutOrgInputObjectSchema as PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema as PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutOrgInput>;
export const PostCreateOrConnectWithoutOrgInputObjectZodSchema = makeSchema();

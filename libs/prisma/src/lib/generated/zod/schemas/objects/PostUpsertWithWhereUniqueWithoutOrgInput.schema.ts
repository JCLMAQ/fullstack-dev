import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOrgInputObjectSchema as PostUpdateWithoutOrgInputObjectSchema } from './PostUpdateWithoutOrgInput.schema';
import { PostUncheckedUpdateWithoutOrgInputObjectSchema as PostUncheckedUpdateWithoutOrgInputObjectSchema } from './PostUncheckedUpdateWithoutOrgInput.schema';
import { PostCreateWithoutOrgInputObjectSchema as PostCreateWithoutOrgInputObjectSchema } from './PostCreateWithoutOrgInput.schema';
import { PostUncheckedCreateWithoutOrgInputObjectSchema as PostUncheckedCreateWithoutOrgInputObjectSchema } from './PostUncheckedCreateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutOrgInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOrgInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutOrgInput>;
export const PostUpsertWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

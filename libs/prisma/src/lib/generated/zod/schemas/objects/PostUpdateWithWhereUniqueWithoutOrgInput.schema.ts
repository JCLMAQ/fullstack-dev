import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOrgInputObjectSchema as PostUpdateWithoutOrgInputObjectSchema } from './PostUpdateWithoutOrgInput.schema';
import { PostUncheckedUpdateWithoutOrgInputObjectSchema as PostUncheckedUpdateWithoutOrgInputObjectSchema } from './PostUncheckedUpdateWithoutOrgInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutOrgInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutOrgInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutOrgInput>;
export const PostUpdateWithWhereUniqueWithoutOrgInputObjectZodSchema = makeSchema();

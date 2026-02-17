import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOwnerInputObjectSchema as PostUpdateWithoutOwnerInputObjectSchema } from './PostUpdateWithoutOwnerInput.schema';
import { PostUncheckedUpdateWithoutOwnerInputObjectSchema as PostUncheckedUpdateWithoutOwnerInputObjectSchema } from './PostUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutOwnerInput>;
export const PostUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

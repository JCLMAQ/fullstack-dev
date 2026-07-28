import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutOwnerInputObjectSchema as PostUpdateWithoutOwnerInputObjectSchema } from './PostUpdateWithoutOwnerInput.schema';
import { PostUncheckedUpdateWithoutOwnerInputObjectSchema as PostUncheckedUpdateWithoutOwnerInputObjectSchema } from './PostUncheckedUpdateWithoutOwnerInput.schema';
import { PostCreateWithoutOwnerInputObjectSchema as PostCreateWithoutOwnerInputObjectSchema } from './PostCreateWithoutOwnerInput.schema';
import { PostUncheckedCreateWithoutOwnerInputObjectSchema as PostUncheckedCreateWithoutOwnerInputObjectSchema } from './PostUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutOwnerInput>;
export const PostUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

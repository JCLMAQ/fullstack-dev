import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutOwnerInputObjectSchema as PostCreateWithoutOwnerInputObjectSchema } from './PostCreateWithoutOwnerInput.schema';
import { PostUncheckedCreateWithoutOwnerInputObjectSchema as PostUncheckedCreateWithoutOwnerInputObjectSchema } from './PostUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutOwnerInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutOwnerInput>;
export const PostCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();

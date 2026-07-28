import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutOwnerInputObjectSchema as PostUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './PostUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutOwnerInput>;
export const PostUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();

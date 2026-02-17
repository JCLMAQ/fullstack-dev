import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkScalarWhereInputObjectSchema as UserPostLikeLinkScalarWhereInputObjectSchema } from './UserPostLikeLinkScalarWhereInput.schema';
import { UserPostLikeLinkUpdateManyMutationInputObjectSchema as UserPostLikeLinkUpdateManyMutationInputObjectSchema } from './UserPostLikeLinkUpdateManyMutationInput.schema';
import { UserPostLikeLinkUncheckedUpdateManyWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedUpdateManyWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPostLikeLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateManyWithoutPostInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateManyWithWhereWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateManyWithWhereWithoutPostInput>;
export const UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectZodSchema = makeSchema();

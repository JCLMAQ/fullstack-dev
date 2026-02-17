import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkScalarWhereInputObjectSchema as UserPostLikeLinkScalarWhereInputObjectSchema } from './UserPostLikeLinkScalarWhereInput.schema';
import { UserPostLikeLinkUpdateManyMutationInputObjectSchema as UserPostLikeLinkUpdateManyMutationInputObjectSchema } from './UserPostLikeLinkUpdateManyMutationInput.schema';
import { UserPostLikeLinkUncheckedUpdateManyWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserPostLikeLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateManyWithWhereWithoutUserInput>;
export const UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkScalarWhereInputObjectSchema as UserFollowerLinkScalarWhereInputObjectSchema } from './UserFollowerLinkScalarWhereInput.schema';
import { UserFollowerLinkUpdateManyMutationInputObjectSchema as UserFollowerLinkUpdateManyMutationInputObjectSchema } from './UserFollowerLinkUpdateManyMutationInput.schema';
import { UserFollowerLinkUncheckedUpdateManyWithoutUserInputObjectSchema as UserFollowerLinkUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserFollowerLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateManyWithWhereWithoutUserInput>;
export const UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();

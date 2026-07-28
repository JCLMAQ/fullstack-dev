import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkScalarWhereInputObjectSchema as UserFollowerLinkScalarWhereInputObjectSchema } from './UserFollowerLinkScalarWhereInput.schema';
import { UserFollowerLinkUpdateManyMutationInputObjectSchema as UserFollowerLinkUpdateManyMutationInputObjectSchema } from './UserFollowerLinkUpdateManyMutationInput.schema';
import { UserFollowerLinkUncheckedUpdateManyWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedUpdateManyWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedUpdateManyWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserFollowerLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateManyWithoutFollowerInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateManyWithWhereWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateManyWithWhereWithoutFollowerInput>;
export const UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithoutUserInputObjectSchema as UserFollowerLinkUpdateWithoutUserInputObjectSchema } from './UserFollowerLinkUpdateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserFollowerLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateWithWhereUniqueWithoutUserInput>;
export const UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

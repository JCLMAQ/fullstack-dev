import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkCreateWithoutUserInputObjectSchema as UserFollowerLinkCreateWithoutUserInputObjectSchema } from './UserFollowerLinkCreateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateOrConnectWithoutUserInput>;
export const UserFollowerLinkCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkCreateWithoutFollowerInputObjectSchema as UserFollowerLinkCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema)])
}).strict();
export const UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateOrConnectWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateOrConnectWithoutFollowerInput>;
export const UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkCreateWithoutUserInputObjectSchema as UserPostLikeLinkCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateOrConnectWithoutUserInput>;
export const UserPostLikeLinkCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();

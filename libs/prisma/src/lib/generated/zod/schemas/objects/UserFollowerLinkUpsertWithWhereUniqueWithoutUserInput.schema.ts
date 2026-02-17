import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithoutUserInputObjectSchema as UserFollowerLinkUpdateWithoutUserInputObjectSchema } from './UserFollowerLinkUpdateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedUpdateWithoutUserInput.schema';
import { UserFollowerLinkCreateWithoutUserInputObjectSchema as UserFollowerLinkCreateWithoutUserInputObjectSchema } from './UserFollowerLinkCreateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserFollowerLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpsertWithWhereUniqueWithoutUserInput>;
export const UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

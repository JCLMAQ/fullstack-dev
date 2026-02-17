import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithoutFollowerInputObjectSchema as UserFollowerLinkUpdateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUpdateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedUpdateWithoutFollowerInput.schema';
import { UserFollowerLinkCreateWithoutFollowerInputObjectSchema as UserFollowerLinkCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserFollowerLinkUpdateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema)]),
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInput>;
export const UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectZodSchema = makeSchema();

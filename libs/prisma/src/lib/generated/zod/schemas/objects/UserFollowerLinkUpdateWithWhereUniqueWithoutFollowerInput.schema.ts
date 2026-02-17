import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithoutFollowerInputObjectSchema as UserFollowerLinkUpdateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUpdateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedUpdateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserFollowerLinkUpdateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedUpdateWithoutFollowerInputObjectSchema)])
}).strict();
export const UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInput>;
export const UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectZodSchema = makeSchema();

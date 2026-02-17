import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithoutUserInputObjectSchema as UserPostLikeLinkUpdateWithoutUserInputObjectSchema } from './UserPostLikeLinkUpdateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPostLikeLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInput>;
export const UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

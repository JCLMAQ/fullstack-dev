import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithoutUserInputObjectSchema as UserPostLikeLinkUpdateWithoutUserInputObjectSchema } from './UserPostLikeLinkUpdateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateWithoutUserInput.schema';
import { UserPostLikeLinkCreateWithoutUserInputObjectSchema as UserPostLikeLinkCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPostLikeLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInput>;
export const UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();

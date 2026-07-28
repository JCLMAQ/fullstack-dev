import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithoutPostInputObjectSchema as UserPostLikeLinkUpdateWithoutPostInputObjectSchema } from './UserPostLikeLinkUpdateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateWithoutPostInput.schema';
import { UserPostLikeLinkCreateWithoutPostInputObjectSchema as UserPostLikeLinkCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserPostLikeLinkUpdateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema)]),
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInput>;
export const UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();

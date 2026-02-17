import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithoutPostInputObjectSchema as UserPostLikeLinkUpdateWithoutPostInputObjectSchema } from './UserPostLikeLinkUpdateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedUpdateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserPostLikeLinkUpdateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedUpdateWithoutPostInputObjectSchema)])
}).strict();
export const UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInput>;
export const UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();

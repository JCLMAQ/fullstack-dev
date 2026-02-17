import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkCreateWithoutPostInputObjectSchema as UserPostLikeLinkCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateOrConnectWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateOrConnectWithoutPostInput>;
export const UserPostLikeLinkCreateOrConnectWithoutPostInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCommentsInputObjectSchema as UserCreateWithoutCommentsInputObjectSchema } from './UserCreateWithoutCommentsInput.schema';
import { UserUncheckedCreateWithoutCommentsInputObjectSchema as UserUncheckedCreateWithoutCommentsInputObjectSchema } from './UserUncheckedCreateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCommentsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCommentsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput>;
export const UserCreateOrConnectWithoutCommentsInputObjectZodSchema = makeSchema();

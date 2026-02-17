import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutCommentsInputObjectSchema as UserCreateWithoutCommentsInputObjectSchema } from './UserCreateWithoutCommentsInput.schema';
import { UserUncheckedCreateWithoutCommentsInputObjectSchema as UserUncheckedCreateWithoutCommentsInputObjectSchema } from './UserUncheckedCreateWithoutCommentsInput.schema';
import { UserCreateOrConnectWithoutCommentsInputObjectSchema as UserCreateOrConnectWithoutCommentsInputObjectSchema } from './UserCreateOrConnectWithoutCommentsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCommentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCommentsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput>;
export const UserCreateNestedOneWithoutCommentsInputObjectZodSchema = makeSchema();

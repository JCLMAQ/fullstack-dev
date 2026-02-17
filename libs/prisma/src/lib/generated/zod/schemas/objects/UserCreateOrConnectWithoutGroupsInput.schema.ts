import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGroupsInputObjectSchema as UserCreateWithoutGroupsInputObjectSchema } from './UserCreateWithoutGroupsInput.schema';
import { UserUncheckedCreateWithoutGroupsInputObjectSchema as UserUncheckedCreateWithoutGroupsInputObjectSchema } from './UserUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutGroupsInput>;
export const UserCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();

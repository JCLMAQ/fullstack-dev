import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutGroupsInputObjectSchema as UserCreateWithoutGroupsInputObjectSchema } from './UserCreateWithoutGroupsInput.schema';
import { UserUncheckedCreateWithoutGroupsInputObjectSchema as UserUncheckedCreateWithoutGroupsInputObjectSchema } from './UserUncheckedCreateWithoutGroupsInput.schema';
import { UserCreateOrConnectWithoutGroupsInputObjectSchema as UserCreateOrConnectWithoutGroupsInputObjectSchema } from './UserCreateOrConnectWithoutGroupsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutGroupsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutGroupsInput>;
export const UserCreateNestedOneWithoutGroupsInputObjectZodSchema = makeSchema();

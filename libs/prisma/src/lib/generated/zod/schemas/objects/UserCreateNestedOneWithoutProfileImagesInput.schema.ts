import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProfileImagesInputObjectSchema as UserCreateWithoutProfileImagesInputObjectSchema } from './UserCreateWithoutProfileImagesInput.schema';
import { UserUncheckedCreateWithoutProfileImagesInputObjectSchema as UserUncheckedCreateWithoutProfileImagesInputObjectSchema } from './UserUncheckedCreateWithoutProfileImagesInput.schema';
import { UserCreateOrConnectWithoutProfileImagesInputObjectSchema as UserCreateOrConnectWithoutProfileImagesInputObjectSchema } from './UserCreateOrConnectWithoutProfileImagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileImagesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutProfileImagesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutProfileImagesInput>;
export const UserCreateNestedOneWithoutProfileImagesInputObjectZodSchema = makeSchema();

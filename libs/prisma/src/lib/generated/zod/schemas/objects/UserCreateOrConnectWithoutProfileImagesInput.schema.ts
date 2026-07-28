import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProfileImagesInputObjectSchema as UserCreateWithoutProfileImagesInputObjectSchema } from './UserCreateWithoutProfileImagesInput.schema';
import { UserUncheckedCreateWithoutProfileImagesInputObjectSchema as UserUncheckedCreateWithoutProfileImagesInputObjectSchema } from './UserUncheckedCreateWithoutProfileImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileImagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProfileImagesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutProfileImagesInput>;
export const UserCreateOrConnectWithoutProfileImagesInputObjectZodSchema = makeSchema();

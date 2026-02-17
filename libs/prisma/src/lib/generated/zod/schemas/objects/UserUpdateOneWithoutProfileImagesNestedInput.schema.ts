import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProfileImagesInputObjectSchema as UserCreateWithoutProfileImagesInputObjectSchema } from './UserCreateWithoutProfileImagesInput.schema';
import { UserUncheckedCreateWithoutProfileImagesInputObjectSchema as UserUncheckedCreateWithoutProfileImagesInputObjectSchema } from './UserUncheckedCreateWithoutProfileImagesInput.schema';
import { UserCreateOrConnectWithoutProfileImagesInputObjectSchema as UserCreateOrConnectWithoutProfileImagesInputObjectSchema } from './UserCreateOrConnectWithoutProfileImagesInput.schema';
import { UserUpsertWithoutProfileImagesInputObjectSchema as UserUpsertWithoutProfileImagesInputObjectSchema } from './UserUpsertWithoutProfileImagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProfileImagesInputObjectSchema as UserUpdateToOneWithWhereWithoutProfileImagesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProfileImagesInput.schema';
import { UserUpdateWithoutProfileImagesInputObjectSchema as UserUpdateWithoutProfileImagesInputObjectSchema } from './UserUpdateWithoutProfileImagesInput.schema';
import { UserUncheckedUpdateWithoutProfileImagesInputObjectSchema as UserUncheckedUpdateWithoutProfileImagesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileImagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileImagesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileImagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUpdateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileImagesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutProfileImagesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutProfileImagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutProfileImagesNestedInput>;
export const UserUpdateOneWithoutProfileImagesNestedInputObjectZodSchema = makeSchema();

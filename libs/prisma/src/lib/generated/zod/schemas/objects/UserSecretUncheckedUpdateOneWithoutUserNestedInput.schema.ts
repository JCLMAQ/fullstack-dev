import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSecretCreateWithoutUserInputObjectSchema as UserSecretCreateWithoutUserInputObjectSchema } from './UserSecretCreateWithoutUserInput.schema';
import { UserSecretUncheckedCreateWithoutUserInputObjectSchema as UserSecretUncheckedCreateWithoutUserInputObjectSchema } from './UserSecretUncheckedCreateWithoutUserInput.schema';
import { UserSecretCreateOrConnectWithoutUserInputObjectSchema as UserSecretCreateOrConnectWithoutUserInputObjectSchema } from './UserSecretCreateOrConnectWithoutUserInput.schema';
import { UserSecretUpsertWithoutUserInputObjectSchema as UserSecretUpsertWithoutUserInputObjectSchema } from './UserSecretUpsertWithoutUserInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './UserSecretWhereInput.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './UserSecretWhereUniqueInput.schema';
import { UserSecretUpdateToOneWithWhereWithoutUserInputObjectSchema as UserSecretUpdateToOneWithWhereWithoutUserInputObjectSchema } from './UserSecretUpdateToOneWithWhereWithoutUserInput.schema';
import { UserSecretUpdateWithoutUserInputObjectSchema as UserSecretUpdateWithoutUserInputObjectSchema } from './UserSecretUpdateWithoutUserInput.schema';
import { UserSecretUncheckedUpdateWithoutUserInputObjectSchema as UserSecretUncheckedUpdateWithoutUserInputObjectSchema } from './UserSecretUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserSecretCreateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserSecretCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => UserSecretUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserSecretWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserSecretWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserSecretWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserSecretUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserSecretUpdateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const UserSecretUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserSecretUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUncheckedUpdateOneWithoutUserNestedInput>;
export const UserSecretUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();

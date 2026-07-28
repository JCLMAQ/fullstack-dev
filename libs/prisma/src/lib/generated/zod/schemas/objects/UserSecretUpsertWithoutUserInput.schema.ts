import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserSecretUpdateWithoutUserInputObjectSchema as UserSecretUpdateWithoutUserInputObjectSchema } from './UserSecretUpdateWithoutUserInput.schema';
import { UserSecretUncheckedUpdateWithoutUserInputObjectSchema as UserSecretUncheckedUpdateWithoutUserInputObjectSchema } from './UserSecretUncheckedUpdateWithoutUserInput.schema';
import { UserSecretCreateWithoutUserInputObjectSchema as UserSecretCreateWithoutUserInputObjectSchema } from './UserSecretCreateWithoutUserInput.schema';
import { UserSecretUncheckedCreateWithoutUserInputObjectSchema as UserSecretUncheckedCreateWithoutUserInputObjectSchema } from './UserSecretUncheckedCreateWithoutUserInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './UserSecretWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserSecretUpdateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserSecretCreateWithoutUserInputObjectSchema), z.lazy(() => UserSecretUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => UserSecretWhereInputObjectSchema).optional()
}).strict();
export const UserSecretUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUpsertWithoutUserInput>;
export const UserSecretUpsertWithoutUserInputObjectZodSchema = makeSchema();
